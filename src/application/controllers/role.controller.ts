import { Request, Response } from "express";
import RoleRepository from "../repositories/role.repository";
import { RoleUseCase } from "../../domain/useCases/role.use-case";

class RoleController {
  async role (req: Request, res: Response) {
    try {
      const tag = req.body.tag;

      const repository = new RoleRepository();
      const useCase = new RoleUseCase(repository);

      const roleWasCreated = await useCase.executeCreateRole(tag);

      if (!roleWasCreated) throw new Error("invalid tag");

      res.send("role created");
    } catch (e) {
      const error = e as { message: string };
      res.status(400).send(error.message);
    }
  }
}

export default new RoleController();