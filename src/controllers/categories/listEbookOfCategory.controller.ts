import { Request, Response } from "express";
import listEbookOfCategoryService from "../../services/categories/listEbookOfCategory.service";

const listEbookOfCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const allEbookOfCategory = await listEbookOfCategoryService({ id });

  return res.status(200).json(allEbookOfCategory);
};

export default listEbookOfCategoryController;
