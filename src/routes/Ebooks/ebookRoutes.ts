import { Router } from "express";

import createEbooksController from "../../controllers/ebooks/createEbooks.controller";
import deleteEbookController from "../../controllers/ebooks/deleteEbook.controller";
import listEbookByIdController from "../../controllers/ebooks/listEbookById.controller";
import listEbooksController from "../../controllers/ebooks/listEbooks.controller";
import updateEbookController from "../../controllers/ebooks/updateEbook.controller";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

import { handleSchemaEbooks } from "../../middlewares/schemas/handleSchemaEbooks.middleware";
import { ebooksRequestSchema } from "../../schemas/ebooks.schema";

const eBooksRoutes = Router();

eBooksRoutes.post(
  "",
  handleSchemaEbooks(ebooksRequestSchema),
  handleAuthMiddleware,
  adminAuthMiddleware,
  createEbooksController
); //cadastrar um livro -- SO ADMIN
eBooksRoutes.get("", listEbooksController); //listar todos os LIVROS
eBooksRoutes.get("/:id", listEbookByIdController); //listar um livro
eBooksRoutes.patch(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  updateEbookController
); // atualizar dados do livro -- SO ADMIN
eBooksRoutes.delete(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  deleteEbookController
); // excluir livros -- SO ADMIN

export default eBooksRoutes;
