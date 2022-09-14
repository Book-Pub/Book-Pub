import { Ebooks } from "../../entities/ebooks/ebooks.entity";
import { Author } from "../../entities/author/author.entity";
import { Categories } from "../../entities/category/category.entity";
import { IbookUpdateRequest } from "../../interfaces/ebooks.interface";
import {
  authorRepository,
  categoriesRepository,
  ebooksRepository,
} from "../../utils/repositories";
import { AppError } from "../../errors/appError";

const updateEbookService = async (
  id: string,
  data: IbookUpdateRequest
): Promise<void> => {
  const {
    author,
    bookCover,
    category,
    country,
    dateRelease,
    description,
    editionNumber,
    isbn,
    language,
    name,
    numberPages,
    publishingCompany,
    value,
  } = data;
  if (
    !author &&
    !bookCover &&
    !category &&
    !country &&
    !dateRelease &&
    !description &&
    !editionNumber &&
    !isbn &&
    !language &&
    !name &&
    !numberPages &&
    !publishingCompany &&
    !value
  ) {
    throw new AppError(400, "Not a key has been passed");
  }

  const ebookExists = await ebooksRepository.findOneBy({ id });
  if (!ebookExists) {
    throw new AppError(400, "User not found");
  }

  const ebooks = await ebooksRepository.find();

  const nameAlreadyExists = ebooks.find((ebook) => ebook.name === data.name);

  if (nameAlreadyExists) {
    throw new AppError(400, "Book Already Exists");
  }

  const authorExists = await authorRepository.findOneBy({ id: data.author });
  if (!authorExists) {
    throw new AppError(400, "Invalid author");
  }

  const categoryExists = await categoriesRepository.findOneBy({
    id: data.category,
  });
  if (!categoryExists) {
    throw new AppError(400, "Invalid Category");
  }

  await ebooksRepository.update(id, {
    author: authorExists ? authorExists : ebookExists.author,
    categories: categoryExists ? categoryExists : ebookExists.categories,
    name: data.name ? data.name : ebookExists.name,
    dateRelease: data.dateRelease ? data.dateRelease : ebookExists.dateRelease,
    bookCover: data.bookCover ? data.bookCover : ebookExists.bookCover,
    value: data.value ? data.value : ebookExists.value,
    description: data.description ? data.description : ebookExists.description,
    publishingCompany: data.publishingCompany
      ? data.publishingCompany
      : ebookExists.publishingCompany,
    language: data.language ? data.language : ebookExists.language,
    editionNumber: data.editionNumber
      ? data.editionNumber
      : ebookExists.editionNumber,
    numberPages: data.numberPages ? data.numberPages : ebookExists.numberPages,
    country: data.country ? data.country : ebookExists.country,
    isbn: data.isbn ? data.isbn : ebookExists.isbn,
  });
};

export default updateEbookService;
