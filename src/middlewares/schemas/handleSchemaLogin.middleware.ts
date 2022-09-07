import { Request, Response, NextFunction } from "express";

import { SchemaOf } from "yup";
import { AppError } from "../../errors/appError";
import { ILogin } from "../../interfaces/login.interface";

export const handleSchemaLogin =
  (schema: SchemaOf<ILogin>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validatedData = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      next();
    } catch (err: any) {
      if (err) {
        throw new AppError(400, err.errors?.join(", ") as string);
      }
    }
  };
