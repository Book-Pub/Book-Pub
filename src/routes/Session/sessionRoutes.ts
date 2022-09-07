import { Router } from "express";

import { handleSchemaLogin } from "../../middlewares/schemas/handleSchemaLogin.middleware";
import { loginRequestSchema } from "../../schemas/login.schema";

const sessionRoutes = Router();

sessionRoutes.post("", handleSchemaLogin(loginRequestSchema)); // Login

export default sessionRoutes;
