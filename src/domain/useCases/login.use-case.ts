import { ICriptography } from "../interfaces/ICriptographyAdapter";
import { IUserRepository } from "../interfaces/IUserRepository";

type LoginUseCaseInput = {
  email: string;
  password: string;
};

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private criptography: ICriptography
  ) {}

  async execute(body: LoginUseCaseInput) {
    const { email, password } = body;

    if (!email) throw new Error("email is required");

    if (!password) throw new Error("password is required");

    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error("user not found");

    const validPassword = this.criptography.compare(password, user.password);

    return validPassword;
  }
}
