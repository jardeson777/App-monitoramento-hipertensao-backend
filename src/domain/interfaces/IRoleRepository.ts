export interface IRoleRepository {
  createRole (tag: string): Promise<Role | null>;
}