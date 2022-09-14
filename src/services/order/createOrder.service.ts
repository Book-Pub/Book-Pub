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

const createOrderService = async (id: string, { ebooksId }: IOrderRequest) => {
  if (!ebooksId) {
    throw new AppError(400, "Ebooks Id is required");
  }

  const users = await userRepository.find();
  const userFind = users.find((user) => user.id === id);

  if (!userFind) {
    throw new AppError(400, "User not Found");
  }

  const ebooks = await ebooksRepository.find();
  const ebooksFind = ebooks.find((ebook) => ebook.id === ebooksId);

  if (!ebooksFind) {
    throw new AppError(400, "Ebooks not found");
  }

  const newOrder = orderRepository.create({
    user: userFind,
  });

  const orders = await orderRepository.find();
  orders.find((order) => order.id === newOrder.id);

  const newOrderEbook = orderEbooksRepository.create({
    order: newOrder,
    ebooks: ebooksFind,
  });

  await orderRepository.save(newOrder);
  await orderEbooksRepository.save(newOrderEbook);

  return newOrder ;
};

export default createOrderService;
