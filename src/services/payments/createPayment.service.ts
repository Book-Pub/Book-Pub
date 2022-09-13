import { Payment } from "../../entities/payment/payment.entity";
import { AppError } from "../../errors/appError";
import { IPaymentRequest } from "../../interfaces/payment.interface";
import { paymentRepository, userRepository } from "../../utils/repositories";
import bcrypt from "bcryptjs";

const createPaymentService = async (
  { cardName, numberCard, securityCode, expireDate }: IPaymentRequest,
  id: string
): Promise<Payment> => {
  if (!cardName || !numberCard || !securityCode || !expireDate) {
    throw new AppError(400, "Information required for registration is missing");
  }

  const numberCardCrypt = bcrypt.hashSync(String(numberCard), 10);

  const createdPayment = paymentRepository.create({
    cardName: cardName,
    numberCard: numberCardCrypt,
    expireDate: expireDate,
    user: id,
  });

  await paymentRepository.save(createdPayment);

  return createdPayment;
};

export default createPaymentService;
