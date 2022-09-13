import { Request, Response } from "express";
import deletePaymentService from "../../services/payments/deletePayment.service";

const deletePaymentController = async (req: Request, res: Response) => {
  const { id } = req.body;

  const deletePayment = deletePaymentService(id);

  return res.status(200).json({
    message: "Payment deleted Sucessfully",
  });
};

export default deletePaymentController;
