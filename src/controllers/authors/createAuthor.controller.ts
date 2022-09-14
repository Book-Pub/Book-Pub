import { Request, Response } from "express";
import createAuthorService from "../../services/authors/createAuthor.service";

const createAuthorController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const author = await createAuthorService({ name });
  return res
    .status(201)
    .json({ message: "Author Created Successfully", author });
};

export default createAuthorController;
