import { Request, Response } from "express";
import UserRepository from "../repositories/user.repository";
import { LoginUseCase } from "../../domain/useCases/login.use-case";
import { CriptographyAdapter } from "../../infra/adapters/CriptograpyAdapter";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const repository = new UserRepository();
      const criptography = new CriptographyAdapter();
      const useCase = new LoginUseCase(repository, criptography);

      const loginIsValid = await useCase.execute({ email, password });

      if (!loginIsValid) throw new Error("invalid login");

      res.send("rota para logar");
    } catch (e) {
      const error = e as { message: string };
      res.status(400).send(error.message);
    }
  }
}

export default new AuthController();
