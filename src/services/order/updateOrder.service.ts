import { AppError } from "../../errors/appError";
import { IOrderUpdate } from "../../interfaces/order.interface";
import { orderRepository } from "../../utils/repositories";

const updateOrderService = async({status,id}:IOrderUpdate) => {
    const findUser = await orderRepository.findOneBy({id:id});
    
    if(!findUser){
        throw new AppError(400,"Order Not Found")
    }
    
    await orderRepository.update(id,{status:status})
    
    return {...findUser,status}
}

export default updateOrderService