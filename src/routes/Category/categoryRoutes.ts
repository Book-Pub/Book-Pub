import { Router } from "express";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post("", handleAuthMiddleware, adminAuthMiddleware); //cadastrar uma Category -- SO ADMIN
categoriesRoutes.get(""); //listar todas as categorias
categoriesRoutes.get("/:id/products"); //listar produtos de uma categoria
categoriesRoutes.patch("/:id", handleAuthMiddleware, adminAuthMiddleware); // atualizar Categorias -- SO ADMIN
categoriesRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // deletar categorias -- ADMIN

export default categoriesRoutes;
