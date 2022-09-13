import { orderRepository } from "../../utils/repositories";

const listOrderService = async () => {
  const orderList = await orderRepository.find({
    relations: {
      orderEbooks: true,
    },
  });

  return { orderList };
};

export default listOrderService;
