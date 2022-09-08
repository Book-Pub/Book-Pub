import { AppError } from "../../errors/appError";
import { ICategoryIDRequest } from "../../interfaces/categories.interface";
import { categoriesRepository } from "../../utils/repositories";

const deleteCategoryService = async ({
  id,
}: ICategoryIDRequest): Promise<boolean> => {
  const categoryExists = await categoriesRepository.findOneBy({ id });

  if (!categoryExists) {
    throw new AppError(404, "Category does not exist");
  }

  await categoriesRepository.delete(id);

  return true;
};

export default deleteCategoryService;
