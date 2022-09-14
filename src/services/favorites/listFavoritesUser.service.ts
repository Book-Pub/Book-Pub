import { favoritesRepository } from "../../utils/repositories";

const listFavoritesService = async (id: string) => {
  const favorites = favoritesRepository
    .createQueryBuilder("favorites")
    .innerJoinAndSelect("favorites.ebooks", "ebooks")
    .where("favorites.user = :id", { id: id })
    .getMany();

  return favorites;
};

export default listFavoritesService;
