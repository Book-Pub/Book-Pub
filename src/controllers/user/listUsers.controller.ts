import { Request, Response } from "express";
import listUsersService from "../../services/user/listUser.service";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(instanceToPlain(users));
};
export default listUsersController;
