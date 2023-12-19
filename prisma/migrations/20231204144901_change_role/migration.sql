/*
  Warnings:

  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `role_tag` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'PATIENT', 'DOCTOR');

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_role_tag_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role_tag",
ADD COLUMN     "role_tag" "Role" NOT NULL;

-- DropTable
DROP TABLE "role";
