import { Request, Response } from "express";
import PatientRepository from "../repositories/patient.repository";
import { CreatePatientUseCase } from "../../domain/useCases/create-patient.use-case";
import { CriptographyAdapter } from "../../infra/adapters/CriptograpyAdapter";

class PatientController {
  async create(req: Request, res: Response) {
    try {
      const { email, name, password, hospital_id } = req.body;
      const repositoryPatient = new PatientRepository();
      const criptography = new CriptographyAdapter();
      const useCase = new CreatePatientUseCase(
        repositoryPatient,
        criptography
      );

      if (!email) {
        res.status(400).json({
          status: 400,
          messenger: "email missing",
        });
        return;
      }
      if (!name) {
        res.status(400).json({
          status: 400,
          messenger: "name missing",
        });
        return;
      }
      if (!password) {
        res.status(400).json({
          status: 400,
          messenger: "password missing",
        });
        return;
      }

      const patientWasCreated = await useCase.execute({
        email,
        hospital_id,
        name,
        password,
      });

      if (!patientWasCreated) {
        res.status(400).json({
          status: 400,
          messenger: "Patient not created",
        });
      }

      res.json({ status: 200, messenger: "Patient created", id: patientWasCreated.id });
    } catch (e) {
      const error = e as { message: string };
      res.status(400).json({
        status: 400,
        message: error.message,
      });
    }
  }
}

export default new PatientController();
