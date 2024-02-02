import { MedicineTakenStatus } from "@prisma/client";
import { Medicine } from "../entities/Medicine";

export type CreateMedicineInput = Omit<Medicine, "id" | "createdAt" | "updatedAt">;
export type EditMedicineInput =   Omit<Medicine, "id" | "createdAt" | "updatedAt" | "patientId">;

export interface IMedicineRepository {
  createMedicine(medicine: CreateMedicineInput): Promise<{ id: string } | null>;
  findMedicineById(id: string): Promise<Medicine | null>;
  findMedicineByPatientId(patientId: string): Promise<Medicine[] | null>;
  takeMedicine(medicineId: string, status: MedicineTakenStatus): Promise<{ id: string } | null>;
  editMedicine(medicineId: string, editMedicineInput: EditMedicineInput): Promise<{ id: string } | null>;
}

