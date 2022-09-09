import { Request, Response } from "express";
import deleteProductsService from "../../services/products/deleteProducts.service";

const deleteProductsController = async (req:Request,res:Response) => {
    const {id} = req.params

    const deleteProduct = deleteProductsService(id)

    return res.status(200).json({deleteProduct})
}

export default deleteProductsController