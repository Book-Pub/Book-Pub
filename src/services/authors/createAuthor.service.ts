import { Author } from "../../entities/author/author.entity";
import { AppError } from "../../errors/appError";
import { IAuthorRequest } from "../../interfaces/author.interface";
import { authorRepository } from "../../utils/repositories";

const createAuthorService = async ({
  name,
}: IAuthorRequest): Promise<Author> => {
  const nameAuthor = await authorRepository.find();

  const nameAlreadyExists = nameAuthor.find((author) => author.name === name);
  
  if (nameAlreadyExists) {
    throw new AppError(400, "Author already exists");
  }

  const author = authorRepository.create({
    name,
  });

  await authorRepository.save(author);
  return author;
};

export default createAuthorService;
