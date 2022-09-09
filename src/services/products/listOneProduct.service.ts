import { AppError } from "../../errors/appError";
import { productsRepository } from "../../utils/repositories";

const listOneProductsService = async (id:string) => {
    const productList = await productsRepository.findOneBy({
        id:id
    })

    if(!productList){
        throw new AppError(400,"Product does not exists")
    }

    return productList

}

export default listOneProductsService