/*
  Warnings:

  - The primary key for the `bill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `house` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_usertohouse` DROP FOREIGN KEY `_userToHouse_A_fkey`;

-- DropForeignKey
ALTER TABLE `_usertohouse` DROP FOREIGN KEY `_userToHouse_B_fkey`;

-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `Bill_houseId_fkey`;

-- AlterTable
ALTER TABLE `_usertohouse` MODIFY `A` VARCHAR(191) NOT NULL,
    MODIFY `B` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `bill` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `houseId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `house` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_userToHouse` ADD CONSTRAINT `_userToHouse_A_fkey` FOREIGN KEY (`A`) REFERENCES `House`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_userToHouse` ADD CONSTRAINT `_userToHouse_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
