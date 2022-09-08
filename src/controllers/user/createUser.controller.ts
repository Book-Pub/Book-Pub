import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, address, password, isAdm } = req.newUser;
  const user = await createUserService({
    name,
    email,
    address,
    password,
    isAdm,
  });
    const { name, email, address, password, isAdm } = req.newUser
    const user = await createUserService({ name, email, address, password, isAdm })

  return res.status(201).json(instanceToPlain(user));
};
export default createUserController;
