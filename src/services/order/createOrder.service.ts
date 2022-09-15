import { AppError } from "../../errors/appError";
import { IOrderRequest } from "../../interfaces/order.interface";
import {
  ebooksRepository,
  orderEbooksRepository,
  orderRepository,
  userRepository,
} from "../../utils/repositories";

const createOrderService = async (
  userId: string,
  { ebooksId }: IOrderRequest
) => {
  const users = await userRepository.find();

  const userFind = users.find((user) => user.id === userId);

  if (!userFind) {
    throw new AppError(400, "User not Found");
  }

  const ebooksFind = await ebooksRepository.findOneBy({ id: ebooksId });

  if (!ebooksFind) {
    throw new AppError(400, "Ebooks not found");
  }

  const newOrder = orderRepository.create({
    user: userFind,
  });
  await orderRepository.save(newOrder);

  const newOrderEbook = orderEbooksRepository.create({
    ebooks: ebooksFind,
    order: newOrder,
  });

  await orderEbooksRepository.save(newOrderEbook);

  const { id, ebooks } = newOrderEbook;

  const ebookReturn = {
    id: ebooks.id,
    name: ebooks.name,
    authorId: ebooks.author.id,
    authorName: ebooks.author.name,
    categoryId: ebooks.categories.id,
    categoryName: ebooks.categories.name,
  };

  return { OrderId: id, order: ebookReturn };
};

export default createOrderService;
