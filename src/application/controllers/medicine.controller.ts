import { Request, Response } from "express";
import MedicineRepository from "../repositories/medicine.repository";
import { DosageType } from "../../domain/entities/Medicine";
import { CreateMedicineUseCase } from "../../domain/useCases/create-medicine.use-case";
import { TakeMedicineUseCase } from "../../domain/useCases/take-medicine.use-case";
import { FindMedicineUseCase  } from "../../domain/useCases/find-medicine.use-case";

class MedicineController {
  async create(req: Request, res: Response) {
    try {
      const { name, color, patientId, initialDate, intervalInHour, dosage, dosageType } = req.body;
      const repositoryMedicine = new MedicineRepository();
      const useCase = new CreateMedicineUseCase(
        repositoryMedicine,
      );

      if (!name) {
        res.status(400).json({
          status: 400,
          messenger: "name missing",
        });
        return;
      }
      if (!color) {
        res.status(400).json({
          status: 400,
          messenger: "color missing",
        });
        return;
      }
      if (!patientId) {
        res.status(400).json({
          status: 400,
          messenger: "patientId missing",
        });
        return;
      }
      if (!initialDate) {
        res.status(400).json({
          status: 400,
          messenger: "initialDate missing",
        });
        return;
      }
      if (!intervalInHour) {
        res.status(400).json({
          status: 400,
          messenger: "intervalInHour missing",
        });
        return;
      }
      if (!dosage) {
        res.status(400).json({
          status: 400,
          messenger: "dosage missing",
        });
        return;
      }
      if (!dosageType) {
        res.status(400).json({
          status: 400,
          messenger: "dosageType missing",
        });
        return;
      }

      const medicineWasCreated = await useCase.execute({
        name,
        color,
        patientId,
        initialDate,
        intervalInHour,
        dosage,
        dosageType,
      });

      if (!medicineWasCreated) {
        res.status(400).json({
          status: 400,
          messenger: "Medicine not created",
        });
        return;
      }

      res.json({ status: 200, messenger: "Medicine created", id: medicineWasCreated.id });
    } catch (e) {
      const error = e as { message: string };
      res.status(400).json({
        status: 400,
        message: error.message,
      });
      return;
    }
  }

  async take(req: Request, res: Response) {
    try {
      const { medicineId, status } = req.body;
      const repositoryMedicine = new MedicineRepository();
      const useCase = new TakeMedicineUseCase(repositoryMedicine);

      if (!medicineId) {
        res.status(400).json({
          status: 400,
          messenger: "medicineId missing",
        });
        return;
      }

      if (!status) {
        res.status(400).json({
          status: 400,
          messenger: "status missing",
        });
        return;
      }

      const medicineWasTaken = await useCase.execute({
        medicineId,
        status,
      });

      if (!medicineWasTaken) {
        res.status(400).json({
          status: 400,
          messenger: "Medicine not taken",
        });
        return;
      }

      res.json({ status: 200, messenger: "Medicine taken" });
      return;
    } catch (e) {
      const error = e as { message: string };
      res.status(400).json({
        status: 400,
        message: error.message,
      });
      return;
    }
  }

  async findByID(req: Request, res: Response) {
    try {
      const medicineID = req.body;

      const repository = new MedicineRepository();
      const useCase = new FindMedicineUseCase(repository);

      const response = await useCase.execute(medicineID);

      res.status(201).json({
        id: response.id,
        name: response.name,
        color: response.color,
        patientId: response.patientId,
        initialDate: response.initialDate,
        intervalInHour: response.intervalInHour,
        dosage: response.dosage,
        dosageType: DosageType[response.dosageType]
      });
    } catch (e) {
      const error = e as { message: string };
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new MedicineController();