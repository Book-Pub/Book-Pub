import { Categories } from "../../entities/category/category.entity";
import { categoriesRepository } from "../../utils/repositories";

const listAllCategoriesService = async (): Promise<Categories[]> => {
  const categories = await categoriesRepository.find();

  return categories;
};

export default listAllCategoriesService;
