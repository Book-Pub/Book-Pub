import { Router } from "express";
import createPaymentController from "../../controllers/payments/createPayment.controller";
import deletePaymentController from "../../controllers/payments/deletePayment.controller";
import editPaymentController from "../../controllers/payments/editPayment.controller";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";
import { handleSchemaPayment } from "../../middlewares/schemas/handleSchemaPayment.middleware";
import { paymentRequestSchema } from "../../schemas/payment.schema";

const paymentRoutes = Router();

paymentRoutes.post(
  "",
  handleSchemaPayment(paymentRequestSchema),
  handleAuthMiddleware,
  createPaymentController
); // atualizar metodo de pagamento de um usuario
paymentRoutes.patch("/:id", handleAuthMiddleware, editPaymentController); // atualizar metodo de pagamento de um usuario
paymentRoutes.delete("/:id", handleAuthMiddleware, deletePaymentController); // deletar metodo de pagamento de um usuário

export default paymentRoutes;
