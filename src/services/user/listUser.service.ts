import { User } from "../../entities/users/user.entity";
import { userRepository } from "../../utils/repositories";

const listUsersService = async (): Promise<User[]> => {
  const users = await userRepository.find();
  return users;
};
export default listUsersService;
