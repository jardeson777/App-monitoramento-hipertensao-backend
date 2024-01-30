import { DosageType } from "../entities/Medicine";

type medicineByIDOutput = {
  id: string;
  name: string;
  color: string;
  patientId: string;
  initialDate: Date;
  intervalInHour: number;
  dosage: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMedicineIDRepository {
    findByID(id: string): Promise<medicineByIDOutput | null>;
  }