import { Router } from "express";
import createEbooksController from "../../controller/ebooks/createEbooks.controller";
import listEbookByIdController from "../../controller/ebooks/listEbookById.controller";
import listEbooksController from "../../controller/ebooks/listEbooks.controller";
import updateEbookController from "../../controller/ebooks/updateEbook.controller";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const eBooksRoutes = Router();

eBooksRoutes.post(
  "",
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
eBooksRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // excluir livros -- SO ADMIN

export default eBooksRoutes;
