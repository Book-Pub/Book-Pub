import { Ebooks } from "../../entities/ebooks/ebooks.entity";
import { AppError } from "../../errors/appError";
import { authorRepository, ebooksRepository } from "../../utils/repositories";

const listEbooksByAuthorService = async (
  idAuthor: string
): Promise<Ebooks[]> => {
  const author = await authorRepository.findOneBy({
    id: idAuthor,
  });

  if (!author) {
    throw new AppError(404, "Author not found!");
  }

  const ebooksFromAuthor = await ebooksRepository.find({
    where: {
      author: author,
    },
  });

  if (ebooksFromAuthor.length === 0) {
    throw new AppError(404, "There's no books for this author");
  }
  return ebooksFromAuthor;
};

export default listEbooksByAuthorService;
