import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { appRoutes } from "./routes";
import { HandleErrorMiddleware } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
appRoutes(app);
app.use(HandleErrorMiddleware);

export default app;
