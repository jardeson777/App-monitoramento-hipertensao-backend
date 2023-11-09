import { IRoleRepository } from "../interfaces/IRoleRepository";

export class RoleUseCase {
    constructor (
        private roleRepository: IRoleRepository
    ) {}

    async executeCreateRole (tag: string) {

        if (!tag) throw new Error("tag is required");

        const role = await this.roleRepository.createRole(tag);

        if (!role) throw new Error("role already exists");

        return true;
    }
}