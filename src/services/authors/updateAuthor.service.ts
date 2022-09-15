import { Author } from "../../entities/author/author.entity";
import { AppError } from "../../errors/appError";
import { IAuthorUpdate } from "../../interfaces/author.interface";
import { authorRepository } from "../../utils/repositories";

const authorUpdateService = async ({
  name,
  id,
}: IAuthorUpdate): Promise<void> => {
  if (!name) {
    throw new AppError(400, "Not a key has been passed");
  }
  const authors = await authorRepository.find();
  const author = authors.find((author) => author.id === id);
  const authorName = authors.find((author) => author.name === name);

  if (!author) {
    throw new AppError(403, "Author not found");
  }

  if (authorName?.name === name) {
    throw new AppError(409, "Author already exists");
  }

  await authorRepository.update(id, {
    name: name ? name : author.name,
  });
};

export default authorUpdateService;
