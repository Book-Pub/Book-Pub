import { AppError } from "../../errors/appError";
import { userRepository } from "../../utils/repositories";

const deleteUserService = async (id: string) => {
    const user = userRepository.findOne({ where: { id: id } });
    if (!user) {
        throw new AppError(404, "User not found!")
    }
    const softDelete = userRepository.update(id, { ...user, isActive: false })

    return true
}
export default deleteUserService