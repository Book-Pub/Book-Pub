import { Request, Response } from "express";
import deleteOrderService from "../../services/order/deleteOrder.service";

const deleteOrderController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteOrderService({ id });

  return res.status(200).json({ message: "Category deleted from database" });
};

export default deleteOrderController;
