import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import deleteUserController from "../../controllers/user/deleteUser.controller";
import getOneUserController from "../../controllers/user/getOneUser.controller";
import listUsersController from "../../controllers/user/listUsers.controller";
import updateUserController from "../../controllers/user/updateUser.controller";
import updateUserAddressController from "../../controllers/user/updateUserAddress.comtroller";

import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

import { handleSchemaUserCreate } from "../../middlewares/schemas/handleSchemaUserCreate.middleware";
import { userRequestSchema } from "../../schemas/userCreate.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  handleSchemaUserCreate(userRequestSchema),
  createUserController
);

userRoutes.get(
  "",
  handleAuthMiddleware,
  adminAuthMiddleware,
  listUsersController
);

userRoutes.get("/profile/:id", handleAuthMiddleware, getOneUserController);

userRoutes.patch("/:id", handleAuthMiddleware, updateUserController);

userRoutes.patch(
  "/:id/address",
  handleAuthMiddleware,
  updateUserAddressController
);

userRoutes.delete(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  deleteUserController
);

export default userRoutes;
