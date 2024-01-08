import { prisma } from "../../infra/db/prisma";
import { Medicine } from "../../domain/entities/Medicine";

type CreateMedicineInput = Omit<Medicine, "id"|"createdAt"|"updatedAt">;

class MedicineRepository {
  async createMedicine({
    name,
    color,
  }: CreateMedicineInput): Promise<{ id: string } | null> {
    try {
      const medicineCreated = await prisma.medicine.create({ 
        data: {
          name,
          color,
        }
      });

      return {
        id: medicineCreated.id,
      };
    } catch (error) {
      throw new Error(`error on create medicine: ${error}`);
    }
  }
}

export default MedicineRepository; 
