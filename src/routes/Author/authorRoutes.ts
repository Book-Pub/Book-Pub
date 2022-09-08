import { Router } from "express";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

import { handleSchemaAuthor } from "../../middlewares/schemas/handleSchemaAuthor.middleware";
import { authorRequestSchema } from "../../schemas/author.schema";

const authorRoutes = Router();

authorRoutes.post(
  "",
  handleSchemaAuthor(authorRequestSchema),
  handleAuthMiddleware,
  adminAuthMiddleware
); //cadastrar um Autor -- SO ADMIN
authorRoutes.get(""); //listar todos os Autores
authorRoutes.get("/:id/books"); //listar os livros do autor -- ID DO AUTOR
authorRoutes.patch("/:id", handleAuthMiddleware, adminAuthMiddleware); // atualizar autor -- SO ADMIN
authorRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // deletar autor -- SO ADMIN

export default authorRoutes;
