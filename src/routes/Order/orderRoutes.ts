import { Router } from "express";
import createOrderController from "../../controllers/order/createOrder.controller";
import deleteOrderController from "../../controllers/order/deleteOrder.controller";
import listOrderController from "../../controllers/order/listOrder.controller";
import updateOrderController from "../../controllers/order/updateOrder.controller";
import adminAuthMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";
import { handleSchemaOrder } from "../../middlewares/schemas/handleSchemaOrder.middleware";
import { orderRequestSchema } from "../../schemas/cart.schema";

const orderRoutes = Router();

orderRoutes.post(
  "",
  handleSchemaOrder(orderRequestSchema),
  handleAuthMiddleware,
  createOrderController
);
orderRoutes.get("/:id", handleAuthMiddleware, listOrderController);

orderRoutes.patch(
  "/:id",
  handleAuthMiddleware,
  adminAuthMiddleware,
  updateOrderController

orderRoutes.delete("/:id", handleAuthMiddleware, deleteOrderController);

export default orderRoutes;
