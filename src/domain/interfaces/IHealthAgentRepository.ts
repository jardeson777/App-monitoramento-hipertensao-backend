import { HealthAgent } from "../entities/HealthAgent";
import { RolesEnum } from "../entities/Role";

export interface IHealthAgentRepository {
    create(
      name: string, 
      email: string, 
      password: string, 
      roleID: RolesEnum, 
      hospitalID: string): Promise<HealthAgent| null>;
  }