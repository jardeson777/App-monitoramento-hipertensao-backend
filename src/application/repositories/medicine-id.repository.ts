import { prisma } from "../../infra/db/prisma";

class MedicineIDRepository {
  async findByID(id: string) {
    try {
      return await prisma.medicine.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("error on get medicine by ID");
    }
  }
}

export default MedicineIDRepository;
