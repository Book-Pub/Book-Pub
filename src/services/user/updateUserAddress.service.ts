import { AppError } from "../../errors/appError";
import { IAddressUpdate } from "../../interfaces/users.interface";
import { addressRepository, userRepository } from "../../utils/repositories";

const updateUserAddressService = async (
  id: string,
  { streetName, district, number, zipCode, city, state }: IAddressUpdate
): Promise<boolean> => {
  if (!streetName && !district && !number && !zipCode && !city && !state) {
    throw new AppError(400, "Not a key has been passed");
  }

  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new AppError(404, "User not found!");
  }

  const address = await addressRepository.findOne({
    where: { id: user.address.id },
  });

  const updatedAddress = addressRepository.update(user.address.id, {
    streetName: streetName ? streetName : address?.streetName,
    district: district ? district : address?.district,
    number: number ? number : address?.number,
    zipCode: zipCode ? zipCode : address?.zipCode,
    city: city ? city : address?.city,
    state: state ? state : address?.state,
  });

  return true;
};
export default updateUserAddressService;
