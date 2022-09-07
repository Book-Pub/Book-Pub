import { compare } from "bcrypt";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/login.interface";

import jwt from "jsonwebtoken";
import "dotenv/config";
import { userRepository } from "../../utils/repositories";

const loginUserService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new AppError(403, "Invalid email or password");
  }

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError(403, "Invalid email or password");
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    "SECRET_KEY",
    { subject: user.id, expiresIn: "24h" }
  );
  return token;
};
export default loginUserService;
