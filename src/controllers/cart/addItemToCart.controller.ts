import { Request, Response } from "express";
import addItemToService from "../../services/cart/addItemToCart.service";

const addItemToCartController = async (req: Request, res: Response) => {
  const { productId, bookId, userId } = req.cart;
  const cart = addItemToService({ productId, bookId, userId });

  return res.json({ message: "item add to cart", cart });
};

export default addItemToCartController;
