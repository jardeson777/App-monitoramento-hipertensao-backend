import { prisma } from "../../infra/db/prisma";
import { Patient } from "../../domain/entities/Patient";

type CreatePatientInput = Omit<Patient, "id">;

class PatientRepository {
  async createPatient({
    email,
    hospital_id,
    name,
    password,
    role_tag,
  }: CreatePatientInput): Promise<{ id: string } | null> {
    try {
      const userCreated = await prisma.user.create({
        data: {
          email,
          name,
          password,
          role_tag,
          hospital_id
        }
      });

      return {
        id: userCreated.id,
      };
    } catch (error) {
      throw new Error(`error on create patient: ${error}`);
    }
  }
}

export default PatientRepository;
