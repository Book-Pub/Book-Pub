import { Categories } from "../../entities/category/category.entity";
import { AppError } from "../../errors/appError";
import { ICategoryUpdate } from "../../interfaces/categories.interface";
import { categoriesRepository } from "../../utils/repositories";

const updateCategoryService = async ({
  id,
  name,
}: ICategoryUpdate): Promise<void> => {
  if (!id || !name) {
    throw new AppError(400, "Not a key has been passed")
  }
  
  const categories = await categoriesRepository.find();

  const categoryExist = categories.find(category => category.id === id)
  
  if (!categoryExist) {
    throw new AppError(400, "Category does not exist");
  }

  if (categoryExist.name === name) {
    throw new AppError(400, "Category name already exists");
  }

  await categoriesRepository.update(id, { name });

};

export default updateCategoryService;
