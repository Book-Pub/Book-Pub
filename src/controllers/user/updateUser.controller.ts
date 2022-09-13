import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  await updateUserService(id, { name, email, password });

  return res.status(200).json({ message: "User Updated Successfully" });
};
export default updateUserController;
