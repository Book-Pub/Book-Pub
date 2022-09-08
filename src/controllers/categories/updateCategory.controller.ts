import { Request, Response } from "express";
import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedCategory = await updateCategoryService({ id, name });

  return res.status(200).json(updatedCategory);
};

export default updateCategoryController;
