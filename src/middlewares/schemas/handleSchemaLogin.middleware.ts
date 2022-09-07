import { Request, Response, NextFunction } from "express";

import { SchemaOf } from "yup";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/login.interface";


export const handleSchemaLogin =
  (schema: SchemaOf<IUserLogin>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validatedData = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.login = validatedData

      next();
    } catch (err: any) {
      if (err) {
        throw new AppError(400, err.errors?.join(", ") as string);
      }
    }
  };
