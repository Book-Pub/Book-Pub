import * as yup from "yup";

import { SchemaOf } from "yup";

import { IPaymentRequest } from "../interfaces/payment.interface";

export const paymentRequestSchema: SchemaOf<IPaymentRequest> = yup
  .object()
  .shape({
    cardName: yup.string().required("Card_name is not a required fild"),
    securityCode: yup
      .number()
      .max(3)
      .required("Security_code is not a required fild"),
    expireDate: yup.string().required("Expire_date is not a required fild"),
  });
