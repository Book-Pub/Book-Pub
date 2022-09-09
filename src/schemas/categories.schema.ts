import * as yup from "yup";

import { SchemaOf } from "yup";
import { ICategoriesRequest } from "../interfaces/categories.interface";

export const categoriesRequestSchema: SchemaOf<ICategoriesRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
  });
