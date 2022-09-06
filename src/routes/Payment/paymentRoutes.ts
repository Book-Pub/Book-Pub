import { Router } from "express";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const paymentRoutes = Router();

paymentRoutes.post("/:id", handleAuthMiddleware); // atualizar metodo de pagamento de um usuario
paymentRoutes.patch("/:id", handleAuthMiddleware); // atualizar metodo de pagamento de um usuario
paymentRoutes.delete("/:id", handleAuthMiddleware); // deletar metodo de pagamento de um usuário

export default paymentRoutes;
