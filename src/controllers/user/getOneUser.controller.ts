import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import getOneUserService from "../../services/user/getOneUser.service";

const getOneUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getOneUserService(id)

    return res.status(200).json(instanceToPlain(user))
}
export default getOneUserController;