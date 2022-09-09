import { Request, Response } from "express";
import listAuthorsService from "../../services/authors/listAuthors.service";

const listAuthorsController = async (req: Request, res: Response) => {
  const authors = await listAuthorsService();
  return res.json(authors);
};

export default listAuthorsController;
