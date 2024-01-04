import express from "express";
import authRouter from "./infra/routes/auth.routes";
import registerRouter from "./infra/routes/register.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(authRouter);
app.use(registerRouter);

app.listen(3333, () => console.log(`Server is running at 3333.`));
