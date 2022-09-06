import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { AppError } from "../errors/appError";

const adminAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userAdmin = req.user.isAdm;

  if (!userAdmin) {
    throw new AppError(403, "Unauthorized user");
  }

  next();
};

export default adminAuthMiddleware;
