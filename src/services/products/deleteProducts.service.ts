import { AppError } from "../../errors/appError"
import { productsRepository } from "../../utils/repositories"

const deleteProductsService = async (id:string) => {
    const findProduct = await productsRepository.findOneBy({
        id:id
    })

    if(!findProduct){
        throw new AppError(400,"Product does not exists")
    }

    await productsRepository.softDelete(id)

    return "User Deleted with Success"
}

export default deleteProductsService