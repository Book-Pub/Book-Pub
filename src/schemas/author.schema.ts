import * as yup from "yup";

import { SchemaOf } from "yup";
import { IAuthorRequest } from "../interfaces/author.interface copy";

export const authorRequestSchema: SchemaOf<IAuthorRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
  });
