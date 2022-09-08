import { Request, Response } from "express";
import listEbooksService from "../../services/ebooks/listEbooks.service";

const listEbooksController = async (req: Request, res: Response) => {
  const ebooks = await listEbooksService();

  return res.json(ebooks);
};

export default listEbooksController;
