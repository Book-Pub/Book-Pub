import { Categories } from "../../entities/category/category.entity";
import { Ebooks } from "../../entities/ebooks/ebooks.entity";
import { AppError } from "../../errors/appError";
import { ICategoryIDRequest } from "../../interfaces/categories.interface";
import {
  categoriesRepository,
  ebooksRepository,
} from "../../utils/repositories";

const listProductsOfCategoryService = async ({
  id,
}: ICategoryIDRequest): Promise<Ebooks[]> => {
  const categoryExists = await categoriesRepository.findOneBy({ id });

  if (!categoryExists) {
    throw new AppError(404, "Category does not exist");
  }
  const ebooksByCategory = await ebooksRepository
    .createQueryBuilder("ebooks")
    .where("ebooks.categories = :id", { id: id })
    .getMany();

  if (ebooksByCategory.length === 0) {
    throw new AppError(404, " Ebooks not found");
  }

  return ebooksByCategory;
};

export default listProductsOfCategoryService;
