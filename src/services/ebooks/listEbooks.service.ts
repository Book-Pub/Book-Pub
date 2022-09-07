import { Ebooks } from "../../entities/ebooks/ebooks.entity";
import { ebooksRepository } from "../../utils/repositories";

const listEbooksService = async (): Promise<Ebooks[]> => {
  const ebooks = await ebooksRepository.find();

  return ebooks;
};

export default listEbooksService;
