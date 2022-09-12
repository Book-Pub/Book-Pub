import { Request, Response } from "express";
import { rmSync } from "fs";
import updateEbookService from "../../services/ebooks/updateEbooks.service";

const updateEbookController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const updatedEbook = await updateEbookService(id, data);

  return res.status(200).json({
    updatedEbook,
  });
};

export default updateEbookController;
