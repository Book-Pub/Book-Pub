import { User } from "../../entities/users/user.entity";
import { AppError } from "../../errors/appError";
import { userRepository } from "../../utils/repositories";

const getOneUserService = async (id: string): Promise<User> => {
  const user = await userRepository.findOne({ where: { id: id } });

  if (!user) {
    throw new AppError(404, "User not found!");
  }
  return user;
};
export default getOneUserService;
