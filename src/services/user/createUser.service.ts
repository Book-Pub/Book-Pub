import { IUserRequest } from "../../interfaces/users.interface";
import { addressRepository, paymentRepository, userRepository } from "../../utils/repositories";
import bcryptjs from "bcryptjs";
import { AppError } from "../../errors/appError";

const createUserService = async ({ name, email, address, password, isAdm }: IUserRequest) => {
    const hashPassword = bcryptjs.hashSync(password, 10);
    const userExists = await userRepository.findOne({ where: { email: email } })
    
    if (userExists){
        throw new AppError(400, "User already exists")
    }
    
    addressRepository.create({ ...address })
    const user = userRepository.create({
        name,
        email,
        address,
        password: hashPassword,
        isAdm
    });

    await userRepository.save(user)
}
export default createUserService