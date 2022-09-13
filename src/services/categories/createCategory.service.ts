import { Categories } from "../../entities/category/category.entity";
import { AppError } from "../../errors/appError";
import { ICategoriesRequest } from "../../interfaces/categories.interface";
import { categoriesRepository } from "../../utils/repositories";

const createCategoryService = async ({
  name,
}: ICategoriesRequest): Promise<Categories> => {
  if (!name) {
    throw new AppError(400, "Must have a name to create a category");
  }

  const categoryAlreadyExists = await categoriesRepository.findOneBy({ name });

  if (categoryAlreadyExists) {
    throw new AppError(409, "Category already exists");
  }

  const newCategory = categoriesRepository.create({
    name,
  });

  await categoriesRepository.save(newCategory);

  return newCategory;
};

export default createCategoryService;
