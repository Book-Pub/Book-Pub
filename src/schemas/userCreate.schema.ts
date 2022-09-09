import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/users.interface";

export const userRequestSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),

  address: yup.object().shape({
    streetName: yup.string().required(),
    district: yup.string().required(),
    zipCode: yup.string().required(),
    number: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  }),
});
