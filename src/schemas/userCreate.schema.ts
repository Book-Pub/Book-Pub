import * as yup from "yup";

import { SchemaOf } from "yup";

import { IUserRequest } from "../interfaces/users.interface";

export const userRequestSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  is_active: yup.boolean().required(),
  is_adm: yup.boolean().required(),
  address: yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required(),
    number: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  }),
  payment: yup.object().shape({
    card_name: yup
      .string()
      .required("payment.card_name is not a required fild"),
    security_code: yup
      .number()
      .max(3)
      .required("payment.security_code is not a required fild"),
    expire_date: yup
      .string()
      .required("payment.expire_date is not a required fild"),
  }),
});
