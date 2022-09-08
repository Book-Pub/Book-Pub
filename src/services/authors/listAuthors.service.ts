import { Author } from "../../entities/author/author.entity";
import { AppError } from "../../errors/appError";
import { authorRepository } from "../../utils/repositories";

const listAuthorsService = async (): Promise<Author[]> => {
  const authors = await authorRepository.find();

  if (authors.length === 0) {
    throw new AppError(403, "Author not found");
  }

  return authors;
};

export default listAuthorsService;
