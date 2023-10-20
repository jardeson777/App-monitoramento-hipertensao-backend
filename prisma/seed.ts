import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const role = await prisma.role.upsert({
    where: { tag: "ADMINISTRADOR" },
    update: {},
    create: {
      tag: "ADMINISTRADOR",
    },
  });

  const hospital = await prisma.hospital.upsert({
    where: { name: "Hospital Universitário Antonio Pedro" },
    update: {},
    create: {
      name: "Hospital Universitário Antonio Pedro",
    },
  });

  await prisma.user.upsert({
    where: { email: "admin@eupopay.com.br" },
    update: {},
    create: {
      role_id: role.id,
      email: "admin@uff.com.br",
      name: "Administrador",
      password: "$2b$10$SCR8CN9B20hftN6rAjyiBeJj4v/hGf17AJy9qMsmu3ZgjxnDxj1/C", //Senha 12345678
      hospital_id: hospital.id,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
