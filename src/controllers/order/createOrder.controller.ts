import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import createOrderService from "../../services/order/createOrder.service";
const createOrderController = async (req: Request, res: Response) => {
  const { ebooksId } = req.order;
  const id = req.user.id;

  const create = await createOrderService(id, { ebooksId });

  return res
    .status(201)
    .json({ message: "order created successfully", order: create });
};

export default createOrderController;
