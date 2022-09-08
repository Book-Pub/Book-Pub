import * as yup from "yup";

import { SchemaOf } from "yup";
import { IBookRequest } from "../interfaces/ebooks.interface";

export const ebooksRequestSchema: SchemaOf<IBookRequest> = yup.object().shape({
  author: yup.string().required(),
  name: yup.string().required(),
  category: yup.string().required(),
  dateRelease: yup.string().required(),
  bookCover: yup.string().required(),
  value: yup.number().required(),
  description: yup.string().required(),
  publishingCompany: yup.string().required(),
  language: yup.string().required(),
  editionNumber: yup.string().required(),
  numberPages: yup.string().required(),
  country: yup.string().required(),
  isbn: yup.string().required(),
});
