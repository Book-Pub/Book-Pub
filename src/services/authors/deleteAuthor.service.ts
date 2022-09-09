import { AppError } from "../../errors/appError";
import { IAuthorId } from "../../interfaces/author.interface";
import { authorRepository } from "../../utils/repositories";

const deleteAuthorService = async ({ id }: IAuthorId) => {
  const author = await authorRepository.find();
  const account = author.find((user) => user.id === id);
  if (!account) {
    throw new AppError(404, "Author not found!");
  }

  await authorRepository.delete(account!.id);

  return true;
};

export default deleteAuthorService;
