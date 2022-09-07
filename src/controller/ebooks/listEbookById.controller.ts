import { Request, Response } from "express";
import listEbooksByIdService from "../../services/ebooks/listEbookById.service";

const listEbookByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const ebooks = await listEbooksByIdService(id);

  return res.json(ebooks);
};

export default listEbookByIdController;
