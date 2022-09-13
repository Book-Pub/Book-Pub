import { Request, Response } from "express";
import deleteEbookService from "../../services/ebooks/deleteEbooks.service";

const deleteEbookController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteUser = await deleteEbookService(id);

  return res.status(200).json({
    message: "Ebook deleted from database",
  });
};

export default deleteEbookController;
