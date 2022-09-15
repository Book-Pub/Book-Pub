import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import listFavoritesService from "../../services/favorites/listFavoritesUser.service";

const listFavoritesController = async (req: Request, res: Response) => {
  const id = req.user.id;

  const listFavorites = await listFavoritesService(id);

  return res.json(listFavorites);
};

export default listFavoritesController;
