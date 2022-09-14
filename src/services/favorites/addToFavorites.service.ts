import { Ebooks } from "../../entities/ebooks/ebooks.entity";
import { AppError } from "../../errors/appError";
import { IFavoritesRequest } from "../../interfaces/favorites.interface";
import {
  ebooksRepository,
  favoritesRepository,
  userRepository,
} from "../../utils/repositories";

const addToFavoritesService = async ({ userId, bookId }: IFavoritesRequest) => {
  const users = await userRepository.find();
  const user = users.find((user) => user.id === userId);
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
  const returnFavorite = await favoritesRepository
    .createQueryBuilder("favorites")
    .innerJoinAndSelect(Ebooks, "ebooks", "ebooks.id = favorites.ebooks")
    .where("favorites.id = :id", { id: newFavorite.id })
    .getOne();


  return returnFavorite;
};

export default addToFavoritesService;
