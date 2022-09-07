import { Router } from "express";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";
import { handleSchemaPayment } from "../../middlewares/schemas/handleSchemaPayment.middleware";
import { paymentRequestSchema } from "../../schemas/payment.schema";

const paymentRoutes = Router();

paymentRoutes.post(
  "/:id",
  handleSchemaPayment(paymentRequestSchema),
  handleAuthMiddleware
); // atualizar metodo de pagamento de um usuario
paymentRoutes.patch("/:id", handleAuthMiddleware); // atualizar metodo de pagamento de um usuario
paymentRoutes.delete("/:id", handleAuthMiddleware); // deletar metodo de pagamento de um usuário

export default paymentRoutes;
