import { Author } from "../../entities/author/author.entity";
import { AppError } from "../../errors/appError";
import { IAuthorUpdate } from "../../interfaces/author.interface";
import { authorRepository } from "../../utils/repositories";

const authorUpdateService = async ({ name, id }: IAuthorUpdate) => {
  const authors = await authorRepository.findOneBy({ id });
  if (!authors) {
    throw new AppError(403, "Author not found");
  }

  authors.name = name || authors.name;
  authors.updatedAt = new Date();

  await authorRepository.save(authors);
  return authors;
};

export default authorUpdateService;
