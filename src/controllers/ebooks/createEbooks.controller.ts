import { Request, Response } from "express";
import { IBookRequest } from "../../interfaces/ebooks.interface";
import createEbooksService from "../../services/ebooks/createEbooks.service";

const createEbooksController = async (req: Request, res: Response) => {
  const {
    author,
    bookCover,
    category,
    country,
    dateRelease,
    description,
    editionNumber,
    isbn,
    language,
    name,
    numberPages,
    publishingCompany,
    value,
  }: IBookRequest = req.body;

  const eBook = await createEbooksService({
    author,
    bookCover,
    category,
    country,
    dateRelease,
    description,
    editionNumber,
    isbn,
    language,
    name,
    numberPages,
    publishingCompany,
    value,
  });

  return res.status(201).json(eBook);
};

export default createEbooksController;
