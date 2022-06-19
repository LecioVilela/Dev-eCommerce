import { PrismaClient } from '@prisma/client';
import { seedCategories, } from "./data/categories";
import { seedProduct } from "./data/product";
import { seedProductImage } from './data/productimage';

const prisma = new PrismaClient();

async function main() {
    await seedCategories();
    await seedProduct();
    await seedProductImage();
}

main().catch((err) => {
    console.log(err);
    process.exit(1);
});