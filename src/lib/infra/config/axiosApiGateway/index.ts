import { ApiGateway, TypeOptions } from "../apiGateway";
import { JsonSerializer } from "../jsonSerializer";
import axios, { AxiosInstance } from 'axios';
import { API_URL } from "../../../util/url";

export class AxiosApiGateway implements ApiGateway {
  private axios: AxiosInstance | undefined;

  constructor(private objectMapper: JsonSerializer) {  }

  private getAxios(): AxiosInstance {
    if (!this.axios) {
      this.axios = axios.create({
        baseURL: API_URL,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
    }
    return this.axios;
  }

  private processErrorBody = async (_: any): Promise<any> => {
    // TODO - create a class and handle it properly
    return Promise.reject({ error: 'Something happened', status: 500 })
  }

  async get<T>(url: string, options?: TypeOptions<undefined, T>): Promise<T> {
    return this.getAxios()
      .get<T>(url, {
        transformResponse: (data) => this.objectMapper.mapToObject(data, options?.outType),
      })
      .then((response) => response.data)
      .catch((err) => this.processErrorBody(err));
  }

  async getArray<T>(url: string, options?: TypeOptions<undefined, T>): Promise<T[]> {
    return this.getAxios()
      .get<T[]>(url, {
        transformResponse: (data) =>
          options ? this.objectMapper.mapToArray(data, options.outType) : JSON.parse(data),
      })
      .then((response) => response.data)
      .catch((err) => this.processErrorBody(err));
  }
}
