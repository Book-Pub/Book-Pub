import { Router } from "express";

import createEbooksController from "../../controllers/ebooks/createEbooks.controller";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

import { handleSchemaCategories } from "../../middlewares/schemas/handleSchemaCategories.middleware";
import { categoriesRequestSchema } from "../../schemas/categories.schema";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  handleSchemaCategories(categoriesRequestSchema),
  handleAuthMiddleware,
  adminAuthMiddleware,
  createEbooksController
); //cadastrar uma Category -- SO ADMIN

categoriesRoutes.get(""); //listar todas as categorias
categoriesRoutes.get("/:id/products"); //listar produtos de uma categoria
categoriesRoutes.patch("/:id", handleAuthMiddleware, adminAuthMiddleware); // atualizar Categorias -- SO ADMIN
categoriesRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // deletar categorias -- ADMIN

export default categoriesRoutes;
