import { Router } from "express";
import createAuthorController from "../../controllers/authors/createAuthor.controller";
import deleteAuthorController from "../../controllers/authors/deleteAuthor.controller";
import listAuthorsController from "../../controllers/authors/listAuthors.controller";
import listEbooksbyAuthorController from "../../controllers/authors/listBooksByAuthor.controller";
import authorUpdateController from "../../controllers/authors/updateAuthor.controller";
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
);

authorRoutes.get("", listAuthorsController);

authorRoutes.get("/:id/books", listEbooksbyAuthorController); 

authorRoutes.patch(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  authorUpdateController
);

authorRoutes.delete(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  deleteAuthorController
);

export default authorRoutes;
