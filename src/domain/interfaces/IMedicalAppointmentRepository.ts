
type CreateMedicalAppointmentInput = {
    date: string,
    doctorId: string,
    patientId: string,
    exam: string
};

export interface IMedicalAppointmentRepository {
    createMedicalAppointment(input: CreateMedicalAppointmentInput): Promise<{id: string} | null>;
}