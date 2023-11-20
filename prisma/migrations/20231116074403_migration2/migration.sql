/*
  Warnings:

  - You are about to drop the `categories_products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `categories_products` DROP FOREIGN KEY `categories_products_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `categories_products` DROP FOREIGN KEY `categories_products_product_id_fkey`;

-- DropTable
DROP TABLE `categories_products`;
