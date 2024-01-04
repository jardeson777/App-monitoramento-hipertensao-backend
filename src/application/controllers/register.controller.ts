import { Request, Response } from "express";
import UserRepository from "../repositories/user.repository";
import { RegisterUseCase } from "../../domain/useCases/register.use-case";
import { CriptographyAdapter } from "../../infra/adapters/CriptograpyAdapter";

class RegisterController {
  async register(req: Request, res: Response) {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;  
      const roleID = req.body.roleID;
      const hospitalID = req.body.hospitalID;

      const repository = new UserRepository();
      const criptography = new CriptographyAdapter();
      const useCase = new RegisterUseCase(repository, criptography);

      await useCase.execute({ email, name, roleID, hospitalID, password });

      res.send("successful registration");
    } catch (e) {
      const error = e as { message: string };
      res.status(400).send(error.message);
    }
  }
}

export default new RegisterController();