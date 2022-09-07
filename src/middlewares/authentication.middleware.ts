import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/appError";

const handleAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Invalid Token");
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({
          message: "Invalid token",
        });
      }

      req.user = {
        id: decoded.id,
        isAdm: decoded.isAdm,
        isActive: decoded.isActive,
      };

      next();
    }
  );
};

export default handleAuthMiddleware;
