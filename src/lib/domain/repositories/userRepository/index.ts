import {UserAdultResponse, UserKidResponse} from "../../../infra/response";
import {User} from "../../entities";

export default interface UserRepository {
  getAllUsersKid(): Promise<UserKidResponse>;
  getAllUsersAdults(): Promise<UserAdultResponse>;
  getAllUsersSeniors(): Promise<User[]>;
}
