import { Request, Response } from "express";
import updateUserAddressService from "../../services/user/updateUserAddress.service";

const updateUserAddressController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { streetName, district, number, zipCode, city, state } = req.body;
  const updated = await updateUserAddressService(id, {
    streetName,
    district,
    number,
    zipCode,
    city,
    state,
  });

  return res.status(204).json({ message: "Address Updated Successfully" });
};
export default updateUserAddressController;
