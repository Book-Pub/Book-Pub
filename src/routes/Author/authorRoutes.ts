import { Router } from "express";
import createAuthorController from "../../controllers/authors/createAuthor.controller";
import deleteAuthorController from "../../controllers/authors/deleteAuthor.controller";
import listAuthorsController from "../../controllers/authors/listAuthors.controller";
import listEbooksbyAuthorController from "../../controllers/authors/listBooksByAuthor.controller";
import authorUpdateController from "../../controllers/authors/updateAuthor.controller";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const authorRoutes = Router();

authorRoutes.post(
  "",
  handleAuthMiddleware,
  adminAuthMiddleware,
  createAuthorController
); //cadastrar um Autor -- SO ADMIN
authorRoutes.get("", listAuthorsController); //listar todos os Autores
authorRoutes.get("/:id/books", listEbooksbyAuthorController); //listar os livros do autor -- ID DO AUTOR
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
