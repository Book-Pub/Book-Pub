import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import listUsersController from "../../controllers/user/listUsers.controller";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

import { handleSchemaUserCreate } from "../../middlewares/schemas/handleSchemaUserCreate.middleware";
import { userRequestSchema } from "../../schemas/userCreate.schema";

const userRoutes = Router();

userRoutes.post("", handleSchemaUserCreate(userRequestSchema), createUserController); //cadastro de usuario
userRoutes.get("", handleAuthMiddleware, adminAuthMiddleware, listUsersController); //listar todos os usuarios - SÓ ADMIN
userRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // deletar usuario - softdelete - SÓ ADMIN

export default userRoutes;
