import { Router } from "express";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const favoritesRoutes = Router();

favoritesRoutes.post("", handleAuthMiddleware); // cadastrar produto aos favoritos do usuário // BODY COLOCAR O ID DO PRODUTO
favoritesRoutes.get("", handleAuthMiddleware); // listar produtos do carrinho
favoritesRoutes.delete("", handleAuthMiddleware); // deletar metodo de pagamento de um usuário // BODY COLOCAR O ID DO PRODUTO

export default favoritesRoutes;
