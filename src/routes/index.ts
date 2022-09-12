import { Express } from "express";
import authorRoutes from "./Author/authorRoutes";
import cartRoutes from "./Cart/cartRoutes";
import categoriesRoutes from "./Category/categoryRoutes";
import eBooksRoutes from "./Ebooks/ebookRoutes";
import favoritesRoutes from "./Favorites/favoritesRoutes";
import paymentRoutes from "./Payment/paymentRoutes";
import sessionRoutes from "./Session/sessionRoutes";
import userRoutes from "./User/userRoutes";

export const appRoutes = (app: Express) => {
  app.use("/users", userRoutes);
  app.use("/login", sessionRoutes);
  app.use("/payment", paymentRoutes);
  app.use("/favorites", favoritesRoutes);
  app.use("/ebooks", eBooksRoutes);
  app.use("/categories", categoriesRoutes);
  app.use("/cart", cartRoutes);
  app.use("/authors", authorRoutes);
};
