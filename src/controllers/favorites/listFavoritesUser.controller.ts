import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import listFavoritesService from "../../services/favorites/listFavoritesUser.service";

const listFavoritesController = async (req: Request, res: Response) => {
  const listFavorites = await listFavoritesService();

  return res.json({
    favorites: instanceToPlain(listFavorites),
  });
};

export default listFavoritesController;
