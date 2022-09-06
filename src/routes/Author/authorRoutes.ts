import { Router } from "express";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const authorRoutes = Router();

authorRoutes.post("", handleAuthMiddleware, adminAuthMiddleware); //cadastrar um Autor -- SO ADMIN
authorRoutes.get(""); //listar todos os Autores
authorRoutes.get("/:id/books"); //listar os livros do autor -- ID DO AUTOR
authorRoutes.patch("/:id", handleAuthMiddleware, adminAuthMiddleware); // atualizar autor -- SO ADMIN
authorRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // deletar autor -- SO ADMIN

export default authorRoutes;
