import { Request, Response } from "express";
import createPaymentService from "../../services/payments/createPayment.service";
import jwt from "jsonwebtoken";

const createPaymentController = async (req: Request, res: Response) => {
  const id = req.user.id

  const { numberCard, securityCode, expireDate, cardName } = req.payment;

  const createPayment = await createPaymentService(
    { cardName, numberCard, securityCode, expireDate },
    id
  );

  return res.status(201).json({message: "Payment Created Successfully", payment: createPayment});
};

export default createPaymentController;
