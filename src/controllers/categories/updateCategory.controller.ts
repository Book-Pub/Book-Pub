import { Request, Response } from "express";
import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  await updateCategoryService({ id, name });

  return res.status(200).json({ message: "Category Updated Successfully" });
};

export default updateCategoryController;
