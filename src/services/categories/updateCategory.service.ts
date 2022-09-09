import { Categories } from "../../entities/category/category.entity";
import { AppError } from "../../errors/appError";
import { ICategoryUpdate } from "../../interfaces/categories.interface";
import { categoriesRepository } from "../../utils/repositories";

const updateCategoryService = async ({
  id,
  name,
}: ICategoryUpdate): Promise<Categories | null> => {
  if (!id) {
    throw new AppError(400, "Invalid ID");
  }

  if (!name) {
    throw new AppError(400, "Invalid name");
  }

  const categoryExistsbyID = categoriesRepository.findOneBy({ id });

  if (!categoryExistsbyID) {
    throw new AppError(400, "Invalid Category");
  }

  const categories = await categoriesRepository.find();

  const categoryExistsByName = categories.find(
    (category) => category.name === name
  );

  if (categoryExistsByName) {
    throw new AppError(400, "Category name already exists");
  }

  await categoriesRepository.update(id, { name });

  const updatedCategory = categoriesRepository.findOneBy({ id });

  return updatedCategory;
};

export default updateCategoryService;
