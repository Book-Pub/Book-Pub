import { AppError } from "../../errors/appError"
import { IAddressUpdate } from "../../interfaces/users.interface"
import { addressRepository, userRepository } from "../../utils/repositories"

const updateUserAddressService = async (id: string, { streetName, district, number, zipCode, city, state }: IAddressUpdate) => {
    const user = await userRepository.findOne({ where: { id: id } });
    if (!user) {
        throw new AppError(404, "User not found!");
    };
    const address = await addressRepository.findOne({ where: { id: user.address.id } })

    const updatedAddress = addressRepository.update(user.address.id, {
        streetName: streetName ? streetName : address?.streetName,
        district: district ? district : address?.district,
        number: number ? number : address?.number,
        zipCode: zipCode ? zipCode : address?.zipCode,
        city: city ? city : address?.city,
        state: state ? state : address?.state
    });

    return updatedAddress
}
export default updateUserAddressService