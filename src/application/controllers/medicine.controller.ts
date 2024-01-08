import { Request, Response } from "express";
import MedicineRepository from "../repositories/medicine.repository";
import { CreateMedicineUseCase } from "../../domain/useCases/create-medicine.use-case";
import { CriptographyAdapter } from "../../infra/adapters/CriptograpyAdapter";

class MedicineController {
  async create(req: Request, res: Response) {
    
  }
}

export default new MedicineController();