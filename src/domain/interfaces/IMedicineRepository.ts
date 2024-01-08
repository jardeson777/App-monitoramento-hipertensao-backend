import { Medicine } from "../entities/Medicine";

export interface IMedicineRepository {
  createMedicine(medicine: Omit<Medicine, "id"|"createdAt"|"updatedAt">): Promise<{ id: string } | null>;
}

