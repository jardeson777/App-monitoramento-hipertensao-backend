import { ICriptography } from "../interfaces/ICriptographyAdapter";
import { IUserRepository } from "../interfaces/IUserRepository";
import jwt from "jsonwebtoken";

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

    if (!validPassword) throw new Error("user not found");

    return this.generateToken(user.id, user.email, user.role_tag);
  }

  generateToken(userId: string, email: string, role: string) {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET não definido");
    }

    const token = jwt.sign({ userId, email, role }, jwtSecret, {
      expiresIn: "1h",
    });

    return token;
  }
}
