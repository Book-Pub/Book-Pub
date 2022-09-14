import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import createOrderService from "../../services/order/createOrder.service";
const createOrderController = async (req: Request, res: Response) => {
  const token = req.headers.authorization!;

  const { ebooksId } = req.order;

  const decode = jwt.decode(token.slice(7));

  const userId = String(decode!.sub);

  const create = await createOrderService({ ebooksId, userId });

  return res
    .status(201)
    .json({ message: "order created successfully", order: create });
};

export default createOrderController;
