import { Request, Response } from "express";
import listEbooksByAuthorService from "../../services/authors/listBooksByAuthor.service";

const listEbooksbyAuthorController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const author = await listEbooksByAuthorService(id);
  return res.json(author);
};

export default listEbooksbyAuthorController;
