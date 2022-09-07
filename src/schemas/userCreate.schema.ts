import * as yup from "yup";

import { SchemaOf } from "yup";

import { IUserRequest } from "../interfaces/users.interface";

export const userRequestSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  isActive: yup.boolean().required(),
  isAdm: yup.boolean().required(),
  address: yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required(),
    number: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  }),
  payment: yup.object().shape({
    cardName: yup
      .string()
      .required("payment.card_name is not a required fild"),
    securityCode: yup
      .number()
      .max(3)
      .required("payment.security_code is not a required fild"),
    expireDate: yup
      .string()
      .required("payment.expire_date is not a required fild"),
  }),
});
