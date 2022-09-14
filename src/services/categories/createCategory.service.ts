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

  const categories = await categoriesRepository.find();

  const categoryAlreadyExists = categories.find(
    (category) => category.name === name
  );

  if (categoryAlreadyExists) {
    throw new AppError(400, "Category already exists");
  }

  const newCategory = categoriesRepository.create({
    name,
  });

  await categoriesRepository.save(newCategory);

  return newCategory;
};

export default createCategoryService;
