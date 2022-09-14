import { AppError } from "../../errors/appError";
import { ebooksRepository } from "../../utils/repositories";

const deleteEbookService = async (id: string): Promise<void> => {
  const ebooks = await ebooksRepository.find();
  const findEbook = ebooks.find((ebook) => ebook.id === id);

  if (!findEbook) {
    throw new AppError(400, "User not found");
  }

  await ebooksRepository.delete(id);
};

export default deleteEbookService;
