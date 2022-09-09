import { Response,Request } from "express";
import listOneProductsService from "../../services/products/listOneProduct.service";

const listOneProductsController = async (req:Request,res:Response) => {
    const {id} = req.params
    const listProduct = await listOneProductsService(id)
    return res.status(200).json({listProduct})
}

export default listOneProductsController