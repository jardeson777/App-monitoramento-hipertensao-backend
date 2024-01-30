import { IMedicineIDRepository } from "../interfaces/IMedicineIDRepository";

export class MedicineIDUseCase {
    constructor(
        private medicineIDRepository: IMedicineIDRepository,
      ) {}

    async execute (medicineID: string) {
        if (!medicineID) throw new Error("medicine ID is required");

        const medicine = await this.medicineIDRepository.findByID(medicineID);

        if (!medicine) throw new Error("medicine not found");

        return medicine;
    }
}