import { Request, Response } from "express";
import editPaymentService from "../../services/payments/editPayment.service";

const editPaymentController = async(req:Request,res:Response) => {
    const {id} = req.params
    const {cardName,expireDate,numberCard} = req.body

    const edit = await editPaymentService({numberCard,expireDate,cardName},id)

    return res.status(200).json({edit})

}

export default editPaymentController