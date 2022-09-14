import { Favorites } from "../../entities/favorites/favorites.entity";
import { ebooksRepository } from "../../utils/repositories";

const listFavoritesService = async (id: string) => {
  const ebooks = await ebooksRepository
    .createQueryBuilder("ebooks")
    .innerJoinAndSelect(Favorites, "favorites", "favorites.ebooks = ebooks.id")
    .where("favorites.user = :id", { id: id })
    .getMany();

  return ebooks;
};

export default listFavoritesService;
