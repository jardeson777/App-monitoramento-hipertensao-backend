import { ICriptography } from "../interfaces/ICriptographyAdapter";
import { IUserRepository } from "../interfaces/IUserRepository";

type RegisterUseCaseInput = {
  email: string;
  name : string;
  roleID: number;
  hospitalID: number;
  password: string;
};

export class RegisterUseCase {
  constructor(
    private userRepository: IUserRepository,
    private criptography: ICriptography
  ) {}

  async execute(body: RegisterUseCaseInput) {
    const { email, name, roleID, hospitalID, password } = body;

    if (!name) throw new Error("name is required");
    if (!roleID) throw new Error("role ID is required");
    if (!hospitalID) throw new Error("hospital ID is required");
    if (!email) throw new Error("email is required");
    if (!password) throw new Error("password is required");

    const encryptedPassword = this.criptography.encrypt(password);

    await this.userRepository.register(name, email, encryptedPassword, roleID, hospitalID);

    const user = this.userRepository.findByEmail(email);
    if (!user) throw new Error("invalid registration");
  }
}