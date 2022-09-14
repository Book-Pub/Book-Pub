import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import addToFavoritesService from "../../services/favorites/addToFavorites.service";

const addToFavoritesController = async (req: Request, res: Response) => {
  const { userId, bookId } = req.favorites;

  const response = await addToFavoritesService({ bookId, userId });

  return res.status(201).json({
    message: "successfully added to favorites",
    response,
  });
};

export default addToFavoritesController;
