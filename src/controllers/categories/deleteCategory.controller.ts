import { Request, Response } from "express";
import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteCategoryService({ id });

  return res.status(200).json({
    message: "Category deleted from database",
  });
};

export default deleteCategoryController;
