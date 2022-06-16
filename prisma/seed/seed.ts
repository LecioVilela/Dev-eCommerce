import { PrismaClient } from '@prisma/client';
import { seedCategories,  } from "./data/categories";
import { seedProduct } from "./data/product";

const prisma = new PrismaClient();

async function main() {
    await seedCategories();
    await seedProduct();
}

main().catch((err) => {
    console.log(err);
    process.exit(1);
});