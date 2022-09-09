import { Categories } from "../../entities/category/category.entity";
import { AppError } from "../../errors/appError";
import { ICategoryIDRequest } from "../../interfaces/categories.interface";
import {
  categoriesRepository,
  ebooksRepository,
} from "../../utils/repositories";

const listProductsOfCategoryService = async ({
  id,
}: ICategoryIDRequest): Promise<Categories | null> => {
  if (!id) {
    throw new AppError(400, "Invalid Id category");
  }

  const categoryExists = await categoriesRepository.findOneBy({ id });

  if (!categoryExists) {
    throw new AppError(404, "Category does not exist");
  }

  const productsOfCategory = categoriesRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      ebooks: true,
      products: true,
    },
  });

  if (!productsOfCategory) {
    throw new AppError(400, "There are no products or ebooks in this category");
  }

  return productsOfCategory!;
};

export default listProductsOfCategoryService;
