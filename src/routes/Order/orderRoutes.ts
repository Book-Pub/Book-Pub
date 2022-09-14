import { Router } from "express";
import createOrderController from "../../controllers/order/createOrder.controller";
import deleteOrderController from "../../controllers/order/deleteOrder.controller";
import listOrderController from "../../controllers/order/listOrder.controller";
import updateOrderController from "../../controllers/order/updateOrder.controller";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const orderRoutes = Router();

orderRoutes.post("", handleAuthMiddleware, createOrderController);
orderRoutes.get("/:id", handleAuthMiddleware, listOrderController);
orderRoutes.patch("/:id", handleAuthMiddleware, updateOrderController);
orderRoutes.delete("/:id", handleAuthMiddleware, deleteOrderController);

export default orderRoutes;
