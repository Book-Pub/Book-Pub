import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users.interface";
import { userRepository } from "../../utils/repositories";
import bcryptjs from "bcryptjs";

const updateUserService = async (id: string, { name, email, password }: IUserUpdate) => {
    const user = await userRepository.findOne({ where: { id: id } });
    if (!user) {
        throw new AppError(404, "User not found!")
    };

    const updateUser = await userRepository.update(id, {
        name: name ? name : user.name, 
        email: email ? email : user.email, 
        password: password ? bcryptjs.hashSync(password, 10) : user.password
    })

    return updateUser
}
export default updateUserService