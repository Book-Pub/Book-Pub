import { Router } from "express";
import handleAuthMiddleware from "../../middlewares/authentication.middleware";

const orderRoutes = Router();

orderRoutes.post("", handleAuthMiddleware)
orderRoutes.get("", handleAuthMiddleware)
orderRoutes.patch("", handleAuthMiddleware)
orderRoutes.delete("", handleAuthMiddleware)

export default orderRoutes;
