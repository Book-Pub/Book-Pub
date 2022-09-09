import { Router } from "express";
import createProductsController from "../../controllers/products/createProducts.controller";
import deleteProductsController from "../../controllers/products/deleteProducts.controller";
import editProductsController from "../../controllers/products/editProducts.controller";
import listOneProductsController from "../../controllers/products/listOneProduct.controller";
import listProductsController from "../../controllers/products/listproducts.controller";

import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";
import { handleSchemaProducts } from "../../middlewares/schemas/handleSchemaProducts.middleware";
import { productsRequestSchema } from "../../schemas/products.schema";

const productsRoutes = Router();

productsRoutes.post(
  "",
  handleSchemaProducts(productsRequestSchema),
  handleAuthMiddleware,
  adminAuthMiddleware,
  createProductsController
); //cadastro de produtos --SO ADMIN
productsRoutes.get("",listProductsController); //listar todos os produtos
productsRoutes.get("/:id",listOneProductsController); //listar um produto
productsRoutes.patch("/:id", handleAuthMiddleware, adminAuthMiddleware,editProductsController); // atualizar dados do produto --SO ADMIN
productsRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware,deleteProductsController); // deletar produto --SO ADMIN

export default productsRoutes;
