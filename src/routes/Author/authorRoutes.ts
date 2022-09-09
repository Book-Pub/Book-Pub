import { Router } from "express";
import createAuthorController from "../../controllers/authors/createAuthor.controller";
import deleteAuthorController from "../../controllers/authors/deleteAuthor.controller";
import listAuthorsController from "../../controllers/authors/listAuthors.controller";
import authorUpdateController from "../../controllers/authors/updateAuthor.controller";
import listEbookByIdController from "../../controllers/ebooks/listEbookById.controller";

import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

import { handleSchemaAuthor } from "../../middlewares/schemas/handleSchemaAuthor.middleware";
import { authorRequestSchema } from "../../schemas/author.schema";

const authorRoutes = Router();

authorRoutes.post(
  "",
  handleSchemaAuthor(authorRequestSchema),
  handleAuthMiddleware,
  adminAuthMiddleware,
  createAuthorController
); //cadastrar um Autor -- SO ADMIN

authorRoutes.get("", listAuthorsController); //listar todos os Autores

authorRoutes.get("/:id/books", listEbookByIdController); //listar os livros do autor -- ID DO AUTOR

authorRoutes.patch(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  authorUpdateController
); // atualizar autor -- SO ADMIN

authorRoutes.delete(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  deleteAuthorController
); // deletar autor -- SO ADMIN

export default authorRoutes;
