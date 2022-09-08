import { Request, Response } from "express";
import listAllCategoriesService from "../../services/categories/listAllCategories.service";

const listAllCategoriesController = async (req: Request, res: Response) => {
  const categories = await listAllCategoriesService();

  return res.json(categories);
};

export default listAllCategoriesController;
