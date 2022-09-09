import { DefaultNamingStrategy } from "typeorm";
import { Products } from "../../entities/products/products.entity";
import { AppError } from "../../errors/appError";
import { IProductsRequest } from "../../interfaces/products.interface";
import { productsRepository } from "../../utils/repositories";
const createProductsService = async (
    {
    name,
    value,
    categoryId,
    favoriteId
    }:IProductsRequest
    ) => {
        if(!name||!value||!categoryId||!favoriteId){
            throw new AppError(400,"Information required for registration is missing")
        }
        const findProduct = await productsRepository.findOneBy({name:name})

        if(findProduct){
            throw new AppError(400,"Product Already Exists")
        }

        const ProductsList = await productsRepository.find()
        
        const findCategory = ProductsList.find(elem => elem.categories === categoryId)
        const findFavorites = ProductsList.find(elem => elem.favorites.id === favoriteId)
        
        if(!findCategory){
            throw new AppError(400,"Category does not exists")
        }
        if(!findFavorites){
            throw new AppError(400,"Favorite List does not exist")
        }
        const newProduct = new Products
        newProduct.name = name
        newProduct.value = value
        newProduct.categories = categoryId
        
        productsRepository.create(newProduct)

        await productsRepository.save(newProduct)
        
        return newProduct
}

export default createProductsService