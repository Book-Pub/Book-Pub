import { Router } from "express";
import addToFavoritesController from "../../controllers/favorites/addToFavorites.controller";
import removeEbookController from "../../controllers/favorites/removeEbookFavorites.controller";

import handleAuthMiddleware from "../../middlewares/authentication.middleware";

import { handleSchemaFavorites } from "../../middlewares/schemas/handleSchemaFavorites.middleware";
import { favoritesRequestSchema } from "../../schemas/favorites.schema";

const favoritesRoutes = Router();

favoritesRoutes.post(
  "",
  handleSchemaFavorites(favoritesRequestSchema),
  handleAuthMiddleware,
  addToFavoritesController
); // cadastrar produto aos favoritos do usuário // BODY COLOCAR O ID DO PRODUTO
favoritesRoutes.get("", handleAuthMiddleware); // listar produtos do carrinho
favoritesRoutes.delete("", handleAuthMiddleware, removeEbookController); // deletar metodo de pagamento de um usuário // BODY COLOCAR O ID DO PRODUTO

export default favoritesRoutes;
