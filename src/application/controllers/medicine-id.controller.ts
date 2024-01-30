import { Request, Response } from "express";
import { MedicineIDUseCase } from "../../domain/useCases/find-medicine.use-case";
import MedicineIDRepository from "../repositories/medicine-id.repository";

class MedicineIDController {
  async findByID(req: Request, res: Response) {
    try {
      const medicineID = req.body;

      const repository = new MedicineIDRepository();
      const useCase = new MedicineIDUseCase(repository);

      const response = await useCase.execute(medicineID);

      res.status(201).json({
        name: response.name,
        color: response.color
      });
    } catch (e) {
      const error = e as { message: string };
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new MedicineIDController();