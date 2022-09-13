import { favoritesRepository } from "../../utils/repositories";

const listFavoritesService = async () => {
    const favorites = await favoritesRepository.find();

    return favorites
};

export default listFavoritesService;
