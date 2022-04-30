import UserService from "../services/userService";
import { AxiosApiGateway } from "../infra/config/axiosApiGateway";
import { JsonSerializer } from "../infra/config/jsonSerializer";
import { UserApiRepository } from "../infra/repositories";

const objectMapper = new JsonSerializer();

const defaultApiGateway = new AxiosApiGateway(objectMapper);

export const defaultUserService = new UserService(new UserApiRepository(defaultApiGateway));
