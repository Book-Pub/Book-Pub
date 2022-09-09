import { productsRepository } from "../../utils/repositories"

const listProductsService = async () => {
    const ProductsList = await productsRepository.find()
    
    if(ProductsList.length < 0){
        return "Empty Products List"
    }
    
    return ProductsList
}

export default listProductsService