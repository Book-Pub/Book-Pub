import { AppError } from "../../errors/appError";
import { IFavoritesRequest } from "../../interfaces/favorites.interface";
import {
  ebooksRepository,
  favoritesRepository,
  userRepository,
} from "../../utils/repositories";

const addToFavoritesService = async ({ userId, bookId }: IFavoritesRequest) => {
  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError(404, "User not exists");
  }

  const ebooks = await ebooksRepository.findOne({
    where: { id: bookId },
  });

  if (!ebooks) {
    throw new AppError(404, "Ebook not exists");
  }

  const newFavorite = favoritesRepository.create({
    ebooks: ebooks,
    user: user,
  });

  await favoritesRepository.save(newFavorite);

  return newFavorite;
};

export default addToFavoritesService;
