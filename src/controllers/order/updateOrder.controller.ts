import { Request, Response } from "express";
import updateOrderService from "../../services/order/updateOrder.service";

const updateOrderController = async(req: Request,res: Response) => {
    const {id} = req.params;
    const {status} = req.body

    const update = await updateOrderService({status,id})

    return res.status(200).json(update)
}

export default updateOrderController