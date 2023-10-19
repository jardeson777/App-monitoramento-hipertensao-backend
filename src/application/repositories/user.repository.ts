import { prisma } from "../../infra/db/prisma";

class UserRepository {
  async findByEmail(email: string) {
    try {
      return await prisma.user.findUnique({
        where: {
          email,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("error on get user by email");
    }
  }
}

export default UserRepository;
