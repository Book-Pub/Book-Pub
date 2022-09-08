import { Request, Response, NextFunction } from "express";

import { SchemaOf } from "yup";
import { AppError } from "../../errors/appError";
import { IFavoritesRequest } from "../../interfaces/favorites.interface";


export const handleSchemaFavorites =
  (schema: SchemaOf<IFavoritesRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validatedData = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.favorites  = validatedData

      next();
    } catch (err: any) {
      if (err) {
        throw new AppError(400, err.errors?.join(", ") as string);
      }
    }
  };
