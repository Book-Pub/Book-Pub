import { AppError } from "../../errors/appError";
import { IProductsRequest } from "../../interfaces/products.interface";
import { productsRepository } from "../../utils/repositories";

const editProductsService = async ({name,value,categoryId,favoriteId}:IProductsRequest,id:string) => {
    const Product = await productsRepository.findOneBy({
        id:id
    }) 
    
    const nameVerified = await productsRepository.findOneBy({name:name})
    
    if(!Product){
        throw new AppError(400,"Product does not Exists")
    }
    
    if(nameVerified){
        throw new AppError(400,"Name already exists")
    }
    
    const editProduct = {
        name: name ? name : Product?.name ,
        value: value ? value : Product?.value,
        categoryId: categoryId ? categoryId : Product?.categories,
        favoriteId: favoriteId ? favoriteId : Product?.favorites.id
    }

    await productsRepository.update(id,editProduct)

    return editProduct
}

export default editProductsService