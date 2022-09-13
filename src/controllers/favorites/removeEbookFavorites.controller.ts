import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import removeEbookService from "../../services/favorites/removeEbookFavorites.service";

const removeEbookController = async (req: Request, res: Response) => {
  const { userId, favoriteId } = req.body;

  await removeEbookService(userId, favoriteId);

  return res.status(204).json({
    message: "Favorites successfully deleted",
  });
};

export default removeEbookController;
