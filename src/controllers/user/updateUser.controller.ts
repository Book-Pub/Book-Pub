import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, password } = req.body
    const updatedUser = await updateUserService(id, { name, email, password })

    return res.status(200).json(updatedUser)
}
export default updateUserController