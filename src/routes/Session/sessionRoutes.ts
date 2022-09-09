import { Router } from "express";
import loginUserController from "../../controllers/sessions/loginUser.controller";

import { handleSchemaLogin } from "../../middlewares/schemas/handleSchemaLogin.middleware";
import { loginRequestSchema } from "../../schemas/login.schema";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  handleSchemaLogin(loginRequestSchema),
  loginUserController
); // Login

export default sessionRoutes;
