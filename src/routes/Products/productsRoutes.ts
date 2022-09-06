import { Router } from "express";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const productsRoutes = Router();

productsRoutes.post("", handleAuthMiddleware, adminAuthMiddleware); //cadastro de produtos --SO ADMIN
productsRoutes.get(""); //listar todos os produtos
productsRoutes.get("/:id"); //listar um produto
productsRoutes.patch("/:id", handleAuthMiddleware, adminAuthMiddleware); // atualizar dados do produto --SO ADMIN
productsRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // deletar produto --SO ADMIN

export default productsRoutes;
