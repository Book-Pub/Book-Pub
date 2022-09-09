import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController =async (req: Request, res: Response) => {
    const { id } = req.params
    await deleteUserService(id)

    return res.status(200)
}
export default deleteUserController