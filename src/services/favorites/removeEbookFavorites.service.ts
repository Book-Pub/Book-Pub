import { AppError } from "../../errors/appError";
import { favoritesRepository, userRepository } from "../../utils/repositories";

const removeEbookService = async (
  userId: string,
  favoriteId: string
): Promise<boolean> => {
  const user = userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError(404, "User not exists");
  }

  const favorite = await favoritesRepository.findOne({
    where: { id: favoriteId },
  });

  if (!favorite) {
    throw new AppError(404, "favorite not exists");
  }

  await favoritesRepository.delete(favorite.id);

  return true;
};

export default removeEbookService;
