import { Request, Response } from "express";
import MedicalAppointmentRepository from "../repositories/medical-appointment.repository";
import { CreateMedicalAppointmentUseCase } from "../../domain/useCases/create-medical-appointment.use-case";


class MedicalAppointmentController {
    async create(req: Request, res: Response){
        const repositoryMedicalAppointment = new MedicalAppointmentRepository();
        const useCase = new CreateMedicalAppointmentUseCase(repositoryMedicalAppointment);

        const {date, doctorId, patientId, exam} = req.body;

        if (!date) {
            res.status(400).json({
              status: 400,
              messenger: "date missing",
            });
            return;
        }

        if (!doctorId) {
            res.status(400).json({
              status: 400,
              messenger: "doctor id missing",
            }); 
            return;
        }

        if (!patientId) {
            res.status(400).json({
              status: 400,
              messenger: "pacient id missing",
            }); 
            return;
        }

        if (!exam) {
            res.status(400).json({
              status: 400,
              messenger: "exam missing",
            });
            return;
        }

        const medicalAppointmentWasCreated = await useCase.execute({
            date,
            doctorId,
            patientId,
            exam
        })

        if (!medicalAppointmentWasCreated) {
            res.status(400).json({
              status: 400,
              messenger: "Medical appointment not created",
            });
            return;
        }

        res.json({ status: 200, messenger: "Medical appointment created", id: medicalAppointmentWasCreated.id });

        
    }
};

export default new MedicalAppointmentController();