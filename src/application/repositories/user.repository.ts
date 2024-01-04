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
      throw new Error("error on get user by email");
    }
  }

  async register (name: string, email: string, password: string, roleID: number, hospitalID: number) {
    try {
      return await prisma.user.create({
        data: {
          name: name,
          email: email,
          role: roleID,
          hospital: hospitalID,
          password: password
        }
      });
    } catch (error) {
      throw new Error("error on register");
    }
  }
}

export default UserRepository;
