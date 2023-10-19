export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
}
