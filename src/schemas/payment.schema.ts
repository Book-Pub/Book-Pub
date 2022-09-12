import * as yup from "yup";

import { SchemaOf } from "yup";

import { IPaymentRequest } from "../interfaces/payment.interface";

export const paymentRequestSchema: SchemaOf<IPaymentRequest> = yup
  .object()
  .shape({
    cardName: yup.string().required("Card Name is a required field"),
    numberCard: yup.string().required("Number Card is a required field"),
    securityCode: yup
      .string()
      .max(3)
      .required("Security Code is a required field"),
    expireDate: yup.string().required("Expire Date is a required field")
  });
