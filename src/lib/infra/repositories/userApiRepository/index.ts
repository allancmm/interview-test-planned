import { ApiGateway } from "../../config/apiGateway";
import { UserAdultResponse, UserKidResponse } from "../../response";
import { User } from "../../../domain/entities";
import { UserRepository } from "../../../domain/repositories";

export default class UserApiRepository implements UserRepository {
  constructor(private api: ApiGateway) {}

  getAllUsersKid = async (): Promise<UserKidResponse> =>
    this.api.get('users/kids', { outType: UserKidResponse });

  getAllUsersAdults = async (): Promise<UserAdultResponse> =>
    this.api.get('users/adults', { outType: UserAdultResponse });

  getAllUsersSeniors = async (): Promise<User[]> =>
    this.api.getArray('users/seniors', { outType: User });
}
