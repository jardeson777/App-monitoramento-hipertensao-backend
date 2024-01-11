import { ICriptography } from "../interfaces/ICriptographyAdapter";
import { IHealthAgentRepository } from "../interfaces/IHealthAgentRepository";
import { RolesEnum } from "../entities/Role";

type CreateHealthAgentUseCaseInput = {
  name: string;
  email: string;
  password: string;
  hospitalID: string;
};

export class CreateHealthAgentUseCase {
  constructor(
    private healthAgentRepository: IHealthAgentRepository,
    private criptography: ICriptography
  ) { }

  async execute(body: CreateHealthAgentUseCaseInput) {
    const { name, email, password, hospitalID } = body;

    if (!name) throw new Error("name is required");
    if (!hospitalID) throw new Error("hospital ID is required");
    if (!email) throw new Error("email is required");
    if (!password) throw new Error("password is required");

    const encryptedPassword = this.criptography.encrypt(password);

    const user = await this.healthAgentRepository.create(
      name,
      email,
      encryptedPassword,
      RolesEnum.DOCTOR,
      hospitalID
    );

    if (!user) throw new Error("error on doctor registration");

    return user;
  }
}