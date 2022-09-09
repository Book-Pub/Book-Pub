import { ICartRequest } from "../../interfaces/cart.interface";
import { ebooksRepository, productsRepository } from "../../utils/repositories";

const addItemToService = async ({
  productId,
  bookId,
  userId,
}: ICartRequest) => {};

export default addItemToService;
