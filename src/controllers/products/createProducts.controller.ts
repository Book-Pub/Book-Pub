import { Request, Response } from "express";
import createProductsService from "../../services/products/createProducts.service";

const createProductsController = async (req:Request,res:Response) => {
    const {name,value,categoryId,favoriteId} = req.products

    const newProduct = {name,value,categoryId,favoriteId}

    const createProduct  = await createProductsService(newProduct)

    return res.status(201).json({createProduct})
}

export default createProductsController