import { AppError } from "../../errors/appError";
import { userRepository } from "../../utils/repositories";

const deleteUserService = async (id: string): Promise<Boolean> => {
  const user = await userRepository.findOne({ where: { id: id } });
  if (!user) {
    throw new AppError(404, "User not found!");
  }
  console.log("user: ", user);
  const softDelete = await userRepository.update(id, {
    ...user,
    isActive: false,
  });

  return true;
};
export default deleteUserService;
