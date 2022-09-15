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
);

eBooksRoutes.get("", listEbooksController);
eBooksRoutes.get("/:id", listEbookByIdController);

eBooksRoutes.patch(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  updateEbookController
);

eBooksRoutes.delete(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  deleteEbookController
);
export default eBooksRoutes;
