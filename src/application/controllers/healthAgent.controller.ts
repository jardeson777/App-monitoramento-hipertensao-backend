import { Request, Response } from "express";
import { CreateHealthAgentUseCase } from "../../domain/useCases/create-healthAgent.use-case";
import { CriptographyAdapter } from "../../infra/adapters/CriptograpyAdapter";
import HealthAgentRepository from "../repositories/healthAgent.repository";

class HealthAgentController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password, hospitalID } = req.body;

      const repository = new HealthAgentRepository();
      const criptography = new CriptographyAdapter();
      const useCase = new CreateHealthAgentUseCase(repository, criptography);

      await useCase.execute({ name, email, password, hospitalID });

      res.send("Health Agent created");
    } catch (e) {
      const error = e as { message: string };
      res.status(400).send(error.message);
    }
  }
}

export default new HealthAgentController();