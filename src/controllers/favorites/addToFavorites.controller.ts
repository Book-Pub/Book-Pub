import { Request, Response } from "express";

import addToFavoritesService from "../../services/favorites/addToFavorites.service";

const addToFavoritesController = async (req: Request, res: Response) => {
  const { userId, bookId } = req.favorites;

  const addToEbook = await addToFavoritesService({ bookId, userId });

  return res.status(201).json({
    message: "successfully added to favorites",
    favorites: addToEbook,
  });
};

export default addToFavoritesController;
