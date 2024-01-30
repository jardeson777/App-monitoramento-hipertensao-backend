import { Request, Response } from "express";
import MedicineRepository from "../repositories/medicine.repository";
import { CreateMedicineUseCase } from "../../domain/useCases/create-medicine.use-case";
import { TakeMedicineUseCase } from "../../domain/useCases/take-medicine.use-case";
import { DeleteMedicineUseCase } from "../../domain/useCases/delete-medicine.use-case";

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

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const repositoryMedicine = new MedicineRepository();
      const useCase = new DeleteMedicineUseCase(repositoryMedicine);

      if (!id) {
        res.status(400).json({
          status: 400,
          messenger: "medicineId missing",
        });
        return;
      }

      await useCase.execute(id);

      res.json({ status: 200, messenger: "Medicine deleted" });
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
}

export default new MedicineController();