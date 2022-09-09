import { Request, Response } from "express";
import listProductsService from "../../services/products/listproducts.service";

const listProductsController = async (req:Request,res:Response) => {
    const list = await listProductsService()

    return res.status(200).json({list})
}

export default listProductsController