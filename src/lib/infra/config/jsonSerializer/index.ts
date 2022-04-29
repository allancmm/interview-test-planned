import { deserialize, deserializeArray } from 'class-transformer';

export class JsonSerializer {
  mapToObject<T>(r: string, type?: new () => T): T {
    return type ? this.deserializeToObject(r, type) : JSON.parse(r);
  }

  mapToArray<T>(r: string, type?: new () => T): T {
    return type ? this.deserializeToArray(r, type) : JSON.parse(r);
  }

  deserializeToObject<T>(json: any, type: new () => T): T {
    return json ? deserialize(type, json) : json;
  }

  deserializeToArray<T>(json: any, type: new () => T): T[] {
    return json ? deserializeArray(type, json) : json;
  }
}
