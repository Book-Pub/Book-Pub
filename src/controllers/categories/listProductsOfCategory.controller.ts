import { Request, Response } from "express";
import listProductsOfCategoryService from "../../services/categories/listProductsOfCategory.service";

const listProductsOfCategoryController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const allProductsOfCategory = await listProductsOfCategoryService({ id });

  return res.status(200).json(allProductsOfCategory);
};

export default listProductsOfCategoryController;
