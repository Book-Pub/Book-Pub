import { AppError } from "../../errors/appError";
import { IPaymentUpdate } from "../../interfaces/payment.interface";
import { paymentRepository } from "../../utils/repositories";
import bcrypt from "bcryptjs";

const editPaymentService = async (
  { numberCard, expireDate, cardName }: IPaymentUpdate,
  id: string
): Promise<void> => {
  const payments = await paymentRepository.find();
  const findPayment = payments.find((payment) => payment.id === id);

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
};

export default editPaymentService;
