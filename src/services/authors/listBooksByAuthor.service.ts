import { AppError } from "../../errors/appError";
import { authorRepository } from "../../utils/repositories";

const listEbooksByAuthorService = async (idAuthor: string) => {
  const author = await authorRepository.findOne({
    where: {
      id: idAuthor,
    },
    relations: {
      ebooks: true,
    },
  });

  if (!author) {
    throw new AppError(404, "Author not found!");
  }
  return author;
};

export default listEbooksByAuthorService;
