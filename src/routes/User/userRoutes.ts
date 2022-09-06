import { Router } from "express";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const userRoutes = Router();

userRoutes.post(""); //cadastro de usuario
userRoutes.get("", handleAuthMiddleware, adminAuthMiddleware); //listar todos os usuarios - SÓ ADMIN
userRoutes.delete("/:id", handleAuthMiddleware, adminAuthMiddleware); // deletar usuario - softdelete - SÓ ADMIN

export default userRoutes;
