import * as yup from "yup";

import { SchemaOf } from "yup";
import { IUserLogin } from "../interfaces/login.interface";

export const loginRequestSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
