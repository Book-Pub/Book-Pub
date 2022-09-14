import { Author } from "../../entities/author/author.entity";
import { Ebooks } from "../../entities/ebooks/ebooks.entity";
import { AppError } from "../../errors/appError";
import { authorRepository, ebooksRepository } from "../../utils/repositories";

const listEbooksByAuthorService = async (idAuthor: string): Promise<Author> => {
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
