import { Request, Response } from "express";
import deleteOrderService from "../../services/order/deleteOrder.service";

const deleteOrderController = async(req: Request,res:Response) => {
    const {id} = req.params

    const deleteOrder = await deleteOrderService({id})

    return res.status(200).json(deleteOrder)
}

export default deleteOrderController