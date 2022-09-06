import { Router } from "express";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const eBooksRoutes = Router();

eBooksRoutes.post("", handleAuthMiddleware, adminAuthMiddleware); //cadastrar um livro -- SO ADMIN
eBooksRoutes.get(""); //listar todos os LIVROS
eBooksRoutes.get("/:id"); //listar um livro
eBooksRoutes.patch("/:id", handleAuthMiddleware, adminAuthMiddleware); // atualizar dados do livro -- SO ADMIN
eBooksRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // excluir livros -- SO ADMIN

export default eBooksRoutes;
