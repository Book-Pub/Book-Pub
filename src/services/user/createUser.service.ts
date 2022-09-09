import { IUserRequest } from "../../interfaces/users.interface";
import { addressRepository, userRepository } from "../../utils/repositories";
import bcryptjs from "bcryptjs";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/users/user.entity";

const createUserService = async ({
  name,
  email,
  address,
  password,
  isAdm,
}: IUserRequest): Promise<User> => {
  const users = await userRepository.find();

  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    throw new AppError(400, "User already exists");
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newAddres = addressRepository.create({ ...address });

  await addressRepository.save(newAddres);

  const user = userRepository.create({
    name,
    email,
    address: newAddres,
    password: hashPassword,
    isAdm,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
