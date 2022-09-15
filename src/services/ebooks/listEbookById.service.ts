import { Ebooks } from "../../entities/ebooks/ebooks.entity";
import { AppError } from "../../errors/appError";
import { ebooksRepository } from "../../utils/repositories";

const listEbooksByIdService = async (id: string): Promise<Ebooks> => {
  const ebook = await ebooksRepository.findOneBy({ id });

  if (!ebook) {
    throw new AppError(404, "User not found");
  }

  return ebook;
};

export default listEbooksByIdService;
