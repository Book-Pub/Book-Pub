import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/login.interface";
import loginUserService from "../../services/sessions/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
  const { email, password }: IUserLogin = req.login;
  const token = await loginUserService({ email, password });
  return res.json({ token });
};

export default loginUserController;
