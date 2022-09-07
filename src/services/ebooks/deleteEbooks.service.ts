import { AppError } from "../../errors/appError";
import { ebooksRepository } from "../../utils/repositories";

const deleteEbookService = async (id: string): Promise<Boolean> => {
  const findEbook = await ebooksRepository.findOneBy({ id });

  if (!findEbook) {
    throw new AppError(400, "Invalid ID");
  }

  await ebooksRepository.delete(id);

  return true;
};

export default deleteEbookService;
