import { Request, Response } from "express";
import MedicineRepository from "../repositories/medicine.repository";
import { CreateMedicineUseCase } from "../../domain/useCases/create-medicine.use-case"; 

class MedicineController {
  async create(req: Request, res: Response) {
    try {
      const { name, color } = req.body;
      const repositoryMedicine = new MedicineRepository();
      const useCase = new CreateMedicineUseCase(
        repositoryMedicine,
      );

      if (!name) {
        res.status(400).json({
          status: 400,
          messenger: "name missing",
        });
      }
      if (!color) {
        res.status(400).json({
          status: 400,
          messenger: "color missing",
        });
      }

      const medicineWasCreated = await useCase.execute({
        name,
        color,
      });

      if (!medicineWasCreated) {
        res.status(400).json({
          status: 400,
          messenger: "Medicine not created",
        });
      }

      res.json({ status: 200, messenger: "Medicine created", id: medicineWasCreated.id });
    } catch (e) {
      const error = e as { message: string };
      res.status(400).json({
        status: 400,
        message: error.message,
      });
    }
  }
}

export default new MedicineController();