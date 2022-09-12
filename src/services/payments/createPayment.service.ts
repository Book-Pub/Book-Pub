import { Payment } from "../../entities/payment/payment.entity";
import { AppError } from "../../errors/appError";
import { IPaymentRequest } from "../../interfaces/payment.interface";
import { paymentRepository, userRepository } from "../../utils/repositories";
import bcrypt from "bcryptjs";

const createPaymentService = async (
  { cardName, numberCard, securityCode, expireDate }: IPaymentRequest,
  id: string
) => {
  if (!cardName || !numberCard || !securityCode || !expireDate) {
    throw new AppError(400, "Information required for registration is missing");
  }

  const numberCardCrypt = bcrypt.hashSync(String(numberCard), 10);
  const securityCodeCrypto = bcrypt.hashSync(securityCode, 10);

  const newCard = new Payment();
  newCard.cardName = cardName;
  newCard.numberCard = numberCardCrypt;
  securityCode = securityCodeCrypto;
  newCard.expireDate = expireDate;
  newCard.user = id;

  paymentRepository.create(newCard);
  await paymentRepository.save(newCard);

  return newCard;
};

export default createPaymentService;
