import { userRepository } from "../../utils/repositories";

const listUsersService = async () => {
    const users = await userRepository.find();
    return users;
}
export default listUsersService;