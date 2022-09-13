import { AppError } from "../../errors/appError";
import { IPaymentUpdate } from "../../interfaces/payment.interface";
import { paymentRepository } from "../../utils/repositories";
import bcrypt from "bcryptjs";
import { Payment } from "../../entities/payment/payment.entity";
const editPaymentService = async (
  { numberCard, expireDate, cardName }: IPaymentUpdate,
  id: string
): Promise<object> => {
  const findPayment = await paymentRepository.findOneBy({
    id: id,
  });

  if (!findPayment) {
    throw new AppError(400, "Payment does not exists");
  }
  const numberCardCrypt = bcrypt.hashSync(String(numberCard), 10);

  const updatePayment = {
    cardName: cardName ? cardName : findPayment.cardName,
    numberCard: numberCard ? numberCardCrypt : findPayment.numberCard,
    expireDate: expireDate ? expireDate : findPayment.expireDate,
  };

  await paymentRepository.update(id, updatePayment);

  return updatePayment;
};

export default editPaymentService;
