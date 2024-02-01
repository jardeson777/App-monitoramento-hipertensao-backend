import { MedicineTakenStatus } from "@prisma/client";
import { Medicine } from "../entities/Medicine";

export interface IMedicineRepository {
  createMedicine(medicine: Omit<Medicine, "id" | "createdAt" | "updatedAt">): Promise<{ id: string } | null>;
  findMedicineById(id: string): Promise<Medicine | null>;
  findMedicineByPatientId(patientId: string): Promise<Medicine[]>;
  takeMedicine(medicineId: string, status: MedicineTakenStatus): Promise<{ id: string } | null>;
}

