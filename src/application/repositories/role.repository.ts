import { prisma } from "../../infra/db/prisma";

class RoleRepository {
    async createRole (tag: string) {
        try {
            return await prisma.role.create({
                data: {
                    tag: tag
                }
            });
        } catch (error) {
            throw new Error ("error on create tag");
        }
    }
}

export default RoleRepository;