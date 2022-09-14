import { Request, Response } from "express";
import listOrderService from "../../services/order/listOrder.service";

const listOrderController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const list = await listOrderService(id);
  return res.status(200).json(list);
};
export default listOrderController;
