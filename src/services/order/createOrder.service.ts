import { Order } from "../../entities/order/order.entity";
import { OrderEbooks } from "../../entities/orderBooks/orderEbooks.entity";
import { AppError } from "../../errors/appError";
import { IOrderRequest } from "../../interfaces/order.interface";
import {
  ebooksRepository,
  orderEbooksRepository,
  orderRepository,
  userRepository,
} from "../../utils/repositories";

const createOrderService = async ({ ebooksId, userId }: IOrderRequest) => {
  if (!ebooksId) {
    throw new AppError(400, "Ebooks Id is required");
  }

  const userFind = await userRepository.findOneBy({ id: userId });

  if (!userFind) {
    throw new AppError(400, "User not Found");
  }

  const ebooksFind = await ebooksRepository.findOneBy({ id: ebooksId });

  if (!ebooksFind) {
    throw new AppError(400, "Ebooks not found");
  }

  const newOrder = new Order();
  newOrder.user = userFind;

  await orderRepository.findOneBy({ id: newOrder.id });

  const newOrderEbook = new OrderEbooks();
  newOrderEbook.ebooks = ebooksFind;
  newOrderEbook.order = newOrder;

  await orderRepository.save(newOrder);
  await orderEbooksRepository.save(newOrderEbook);

  return { newOrderEbook };
};

export default createOrderService;
