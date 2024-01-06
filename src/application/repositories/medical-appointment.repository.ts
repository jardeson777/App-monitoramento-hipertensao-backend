import { prisma } from "../../infra/db/prisma";

type CreateMedicalAppointmentInput = {
    date: string,
    doctorId: string,
    patientId: string,
    exam: string
};

class MedicalAppointmentRepository {
    async createMedicalAppointment({date, doctorId, patientId, exam}: CreateMedicalAppointmentInput){
        try {
            const medicalAppointmentCreated = await prisma.medicalAppointment.create({
              data: {
                date,
                doctorId,
                patientId,
                exam
              }
            });
        
            return {
              id: medicalAppointmentCreated.id,
            };
          } catch (error) {
            throw new Error(`error on create medical appointment: ${error}`);
          }
    }
}

export default MedicalAppointmentRepository;