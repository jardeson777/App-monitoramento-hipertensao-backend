import { RolesEnum } from "./Role";

export type Patient = {
  id: string;
  email: string;
  name: string;
  role_tag: RolesEnum;
  password: string;
  hospital_id: string;
};
