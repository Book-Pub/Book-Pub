import { Author } from "../../entities/author/author.entity";
import { AppError } from "../../errors/appError";
import { IAuthorUpdate } from "../../interfaces/author.interface";
import { authorRepository } from "../../utils/repositories";

const authorUpdateService = async ({
  name,
  id,
}: IAuthorUpdate): Promise<Author | null> => {
  const authors = await authorRepository.findOneBy({ id });

  if (!authors) {
    throw new AppError(403, "Author not found");
  }

  const updatedAuthor = await authorRepository.update(id, {
    name: name ? name : authors.name,
  });

  const returnUpdatedAuthor = authorRepository.findOneBy({ id });

  return returnUpdatedAuthor;
};

export default authorUpdateService;
