import { AppError } from "../../errors/appError";
import { paymentRepository } from "../../utils/repositories";

const deletePaymentService = async (id: string): Promise<Boolean> => {
  const findPayment = await paymentRepository.findOneBy({ id: id });

  if (!findPayment) {
    throw new AppError(400, "Payment does not exists");
  }
  
    await paymentRepository.delete(id)
    
    return true 
    }

export default deletePaymentService;
