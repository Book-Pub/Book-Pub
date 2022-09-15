import { AppError } from "../../errors/appError";
import { IOrderUpdate } from "../../interfaces/order.interface";
import { orderRepository } from "../../utils/repositories";

const updateOrderService = async ({ status, id }: IOrderUpdate) => {
  if (!status) {
    throw new AppError(400, "Not a key has been passed");
  }

  const users = await orderRepository.find();
  const findUser = users.find((user) => user.id === id);

  if (!findUser) {
    throw new AppError(404, "User Not Found");
  }

  await orderRepository.update(id, { status: status });

  return { ...findUser, status };
};

export default updateOrderService;
