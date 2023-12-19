import express from "express";
import authRouter from "./infra/routes/auth.routes";
import dotenv from "dotenv";
import patientRouter from "./infra/routes/patient.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(authRouter);
app.use(patientRouter);

app.listen(3333, () => console.log(`Server is running at 3333.`));
