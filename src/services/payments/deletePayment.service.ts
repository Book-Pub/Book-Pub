import { AppError } from "../../errors/appError"
import { paymentRepository } from "../../utils/repositories"

const deletePaymentService = async (id:string) => {

    const findPayment = await paymentRepository.findOneBy({id:id})

    if(!findPayment){
        throw new AppError(400,"Payment does not exists")
    }

    await paymentRepository.softDelete(id)

    return "Payment Deleted"
}

export default deletePaymentService