import { AppError } from "../../errors/appError";
import { paymentRepository } from "../../utils/repositories";

const deletePaymentService = async (id: string): Promise<void> => {
  const payments = await paymentRepository.find();
  const findPayment = payments.find((payment) => payment.id === id);
console.log(findPayment)
  
if (!findPayment) {
    throw new AppError(400, "Payment does not exists");
  }

  await paymentRepository.delete(id);
};

export default deletePaymentService;
