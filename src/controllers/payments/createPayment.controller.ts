import { Request, Response } from "express";
import createPaymentService from "../../services/payments/createPayment.service";
import jwt from "jsonwebtoken"
const createPaymentController = async (req:Request,res:Response) => {
    const token = req.headers.authorization!

    const decode = jwt.decode(token.slice(7))

   const id = String(decode!.sub)

    const {numberCard,securityCode,expireDate,cardName} = req.payment

    const createPayment = await createPaymentService({cardName,numberCard,securityCode,expireDate},id)

    return res.status(201).json({createPayment})
}

export default createPaymentController