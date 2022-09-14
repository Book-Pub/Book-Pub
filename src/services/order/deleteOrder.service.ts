import { AppError } from "../../errors/appError";
import { IOrderDelete } from "../../interfaces/order.interface";
import { orderEbooksRepository, orderRepository } from "../../utils/repositories";

const deleteOrderService = async({id}:IOrderDelete) => {
    const findOrder = await orderRepository.findOne({where:{id:id},relations:{orderEbooks:true}});
    
    if(!findOrder){
        throw new AppError(400,"Order Not Found")
    }
    
    await orderEbooksRepository.delete(findOrder!.orderEbooks[0].id)
    await orderRepository.delete(id)

  
}

export default deleteOrderService