import { IMedicalAppointmentRepository } from "../interfaces/IMedicalAppointmentRepository";

type MedicalAppointment = {
    date: string,
    doctorId: string,
    patientId: string,
    exam: string
}



export class CreateMedicalAppointmentUseCase {
    constructor(
      private medicalAppointmentRepository: IMedicalAppointmentRepository,
    ) { }
  
    async execute({date, doctorId, patientId, exam}: MedicalAppointment) {
      const medicalAppointmentCreated = await this.medicalAppointmentRepository.createMedicalAppointment({
        date,
        doctorId,
        patientId,
        exam
      });
  
      if (!medicalAppointmentCreated) throw new Error("Medical appointment not registered");
  
      return { id: medicalAppointmentCreated.id };
    }
  }