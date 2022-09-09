import { Request, Response } from "express";
import deleteAuthorService from "../../services/authors/deleteAuthor.service";

const deleteAuthorController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteAuthorService({ id });
  return res.json({ message: "User sucessfully deleted" });
};

export default deleteAuthorController;
