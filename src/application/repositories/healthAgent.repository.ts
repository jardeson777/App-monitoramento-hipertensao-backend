import { RolesEnum } from "../../domain/entities/Role";
import { prisma } from "../../infra/db/prisma";

class HealthAgentRepository {
    async create(name: string, email: string, password: string, roleID: RolesEnum, hospitalID: string) {
        try {
            const response = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    role_tag: roleID,
                    hospital_id: hospitalID,
                    password: password
                }
            });
            return {
                id: response.id,
            }

        } catch (error) {
            throw new Error("error on create health agent");
        }
    }
}

export default HealthAgentRepository;