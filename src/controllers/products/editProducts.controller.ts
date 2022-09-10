import { Request, Response } from "express";
import editProductsService from "../../services/products/editProducts.service";

const editProductsController = async (req: Request, res: Response) => {
  const { name, value, category, favorite } = req.body;
  const { id } = req.params;

  const update = await editProductsService(
    { name, value, category, favorite },
    id
  );

  return res.status(200).json({ update });
};

export default editProductsController;
