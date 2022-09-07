import { Router } from "express";
import listEbookByIdController from "../../controller/ebooks/listEbookById.controller";
import listEbooksController from "../../controller/ebooks/listEbooks.controller";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const eBooksRoutes = Router();

eBooksRoutes.post("", handleAuthMiddleware, adminAuthMiddleware); //cadastrar um livro -- SO ADMIN
eBooksRoutes.get("", listEbooksController); //listar todos os LIVROS
eBooksRoutes.get("/:id", listEbookByIdController); //listar um livro
eBooksRoutes.patch("/:id", handleAuthMiddleware, adminAuthMiddleware); // atualizar dados do livro -- SO ADMIN
eBooksRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // excluir livros -- SO ADMIN

export default eBooksRoutes;
