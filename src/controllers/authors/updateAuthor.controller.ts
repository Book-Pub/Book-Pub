import { Request, Response } from "express";
import authorUpdateService from "../../services/authors/updateAuthor.service";

const authorUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedAuthor = await authorUpdateService({
    name,
    id,
  });
  return res
    .status(200)
    .json({ message: "Author sucessfully updated", updatedAuthor });
};

export default authorUpdateController;
