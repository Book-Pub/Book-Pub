import { Payment } from "../../entities/payment/payment.entity";
import { AppError } from "../../errors/appError";
import { IPaymentRequest } from "../../interfaces/payment.interface";
import { paymentRepository, userRepository } from "../../utils/repositories";
import bcrypt from "bcryptjs";

const createPaymentService = async (
  { cardName, numberCard, securityCode, expireDate }: IPaymentRequest,
  id: string
): Promise<Payment> => {
  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  const payments = await paymentRepository.find();
  const payment = payments.find((payment) => payment.user.id === id);

  if (payment) {
    throw new AppError(409, "Payment Already Exists");
  }

  const numberCardCrypt = bcrypt.hashSync(String(numberCard), 10);

  const createdPayment = paymentRepository.create({
    cardName: cardName,
    numberCard: numberCardCrypt,
    expireDate: expireDate,
    user: user,
  });

  await paymentRepository.save(createdPayment);

  return createdPayment;
};

export default createPaymentService;
