import { Router } from "express";
import MedicalAppointmentController from "../../application/controllers/medical-appointment.controller";



const medicalAppointmentRouter = Router();

medicalAppointmentRouter.post("/medical-appointment", MedicalAppointmentController.create);

export default medicalAppointmentRouter;