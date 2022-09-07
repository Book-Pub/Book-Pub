import { Ebooks } from "../../entities/ebooks/ebooks.entity";
import { AppError } from "../../errors/appError";
import { IBookRequest } from "../../interfaces/ebooks.interface";
import {
  authorRepository,
  categoriesRepository,
  ebooksRepository,
} from "../../utils/repositories";

const createEbooksService = async ({
  author,
  name,
  category,
  dateRelease,
  bookCover,
  value,
  description,
  publishingCompany,
  language,
  editionNumber,
  numberPages,
  country,
  isbn,
}: IBookRequest): Promise<Ebooks> => {
  if (
    !author ||
    !name ||
    !category ||
    !dateRelease ||
    !value ||
    !description ||
    !publishingCompany ||
    !language ||
    !numberPages ||
    !country ||
    !isbn
  ) {
    throw new AppError(400, "Information required for registration is missing");
  }

  const authorAlreadyExists = await authorRepository.findOneBy({ id: author });

  if (!authorAlreadyExists) {
    throw new AppError(404, "Author doesnt exists");
  }

  const categoryExists = await categoriesRepository.findOneBy({ id: category });
  if (!categoryExists) {
    throw new AppError(404, "Category doesnt exists");
  }

  const bookAlreadyExists = await ebooksRepository.findOneBy({ name });

  if (bookAlreadyExists) {
    throw new AppError(400, "Ebooks already exists");
  }

  const ebooksCreated = ebooksRepository.create({
    author: authorAlreadyExists,
    name,
    categories: categoryExists,
    dateRelease,
    bookCover,
    value,
    description,
    publishingCompany,
    language,
    editionNumber,
    numberPages,
    country,
    isbn,
  });

  await ebooksRepository.save(ebooksCreated);

  return ebooksCreated;
};

export default createEbooksService;
