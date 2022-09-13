import { Router } from "express";

import createCategoryController from "../../controllers/categories/createCategory.controller";
import deleteCategoryController from "../../controllers/categories/deleteCategory.controller";
import listAllCategoriesController from "../../controllers/categories/listAllCategories.controller";
import listProductsOfCategoryController from "../../controllers/categories/listProductsOfCategory.controller";
import updateCategoryController from "../../controllers/categories/updateCategory.controller";
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
  createCategoryController
); //cadastrar uma Category -- SO ADMIN

categoriesRoutes.get("", listAllCategoriesController); //listar todas as categorias
categoriesRoutes.get("/:id/ebooks", listProductsOfCategoryController); //listar produtos de uma categoria
categoriesRoutes.patch(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  updateCategoryController
); // atualizar Categorias -- SO ADMIN
categoriesRoutes.delete(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  deleteCategoryController
); // deletar categorias -- ADMIN

export default categoriesRoutes;
