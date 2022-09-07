import * as yup from "yup";

import { SchemaOf } from "yup";

import { ILogin } from "../interfaces/login.interface";

export const loginRequestSchema: SchemaOf<ILogin> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
