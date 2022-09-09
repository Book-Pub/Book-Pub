import { Router } from "express";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

import { handleSchemaCart } from "../../middlewares/schemas/handleSchemaCart.middleware";
import { cartRequestSchema } from "../../schemas/cart.schema";

const cartRoutes = Router();

cartRoutes.post("", handleSchemaCart(cartRequestSchema), handleAuthMiddleware); //cadastrar um produto/Ebook no carrinho de compras
cartRoutes.get("", handleAuthMiddleware); //listar todos os produtos do carrinho
cartRoutes.delete("/:id", handleAuthMiddleware); // deletar o produto do carrinho -

export default cartRoutes;
