import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const HandleErrorMiddleware = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      code: err.statusCode,
      message: err.message,
    });
  }
  console.log(err);

  return response.status(500).json({
    status: "error",
    code: 500,
    message: "Internal server error",
  });
};
