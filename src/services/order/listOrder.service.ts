import { orderRepository, userRepository } from "../../utils/repositories";

const listOrderService = async (id: string) => {
  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  const orderList = await orderRepository.find({
    where: { user: user },
    relations:{}
  });

  return orderList;
};

export default listOrderService;
