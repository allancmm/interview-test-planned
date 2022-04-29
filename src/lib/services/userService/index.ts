import { User } from "../../domain/entities";
import { UserKidResponse, UserAdultResponse } from "../../infra/response";
import { UserRepository } from "../../domain/repositories";

export default class UserService {
  constructor(private userRepository: UserRepository) {}

  getAllUsersKid = async (): Promise<UserKidResponse> => this.userRepository.getAllUsersKid();

  getAllUsersAdults = async (): Promise<UserAdultResponse> => this.userRepository.getAllUsersAdults();

  getAllUsersSeniors = async (): Promise<User[]> => this.userRepository.getAllUsersSeniors();
}
