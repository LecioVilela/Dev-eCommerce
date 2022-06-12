import { seedCategories } from "./data/categories";

async function main() {
    await seedCategories();
}

main().catch((err) => {
    console.log(err);
    process.exit(1);
});