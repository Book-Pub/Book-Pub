import {
  orderEbooksRepository,
  orderRepository,
} from "../../utils/repositories";

const listOrderService = async (idOrder: string) => {
  const orders = await orderRepository.find();
  const orderId = orders.find((order) => order.id === idOrder);

  const orderReturn = await orderEbooksRepository.find({
    where: {
      order: orderId,
    },
    relations: {
      ebooks: true,
      order: false,
    },
  });

  return orderReturn;
};

export default listOrderService;
