import { AppError } from "../../errors/appError";
import { IAuthorId } from "../../interfaces/author.interface";
import { authorRepository } from "../../utils/repositories";

const deleteAuthorService = async ({ id }: IAuthorId): Promise<void> => {
  const authors = await authorRepository.find();
  const author = authors.find((user) => user.id === id);
  if (!author) {
    throw new AppError(404, "Author not found!");
  }

  await authorRepository.delete(author!.id);
};

export default deleteAuthorService;
