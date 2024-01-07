import { User } from "../entities/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  register(name: string, email: string, password: string, roleID: number, hospitalID: number): Promise<User | null>;
}
