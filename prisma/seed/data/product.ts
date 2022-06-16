import { PrismaClient } from '@prisma/client';
export const productsToInsert = [
    {
        name: "Produto 01",
        category: {
            connect: {
                id: 1,
            },
        },
        description: "Teste de descrição",
        discount: 0,
        height: 10,
        image: "https://via.placeholder.com/360x360",
        is_featured: true,
        price: 10000,
        short_description: "Descrição curta",
        weight: 10,
        width: 10,
        length: 10
    },
    {
        name: "Produto 02",
        category: {
            connect: {
                id: 1,
            },
        },
        description: "Teste de descrição",
        discount: 0,
        height: 10,
        image: "https://via.placeholder.com/360x360",
        is_featured: true,
        price: 10000,
        short_description: "Descrição curta",
        weight: 10,
        width: 10,
        length: 10
    },
    {
        name: "Produto 03",
        category: {
            connect: {
                id: 1,
            },
        },
        description: "Teste de descrição",
        discount: 0,
        height: 10,
        image: "https://via.placeholder.com/360x360",
        is_featured: true,
        price: 10000,
        short_description: "Descrição curta",
        weight: 10,
        width: 10,
        length: 10
    },
    {
        name: "Produto 04",
        category: {
            connect: {
                id: 1,
            },
        },
        description: "Teste de descrição",
        discount: 0,
        height: 10,
        image: "https://via.placeholder.com/360x360",
        is_featured: true,
        price: 10000,
        short_description: "Descrição curta",
        weight: 10,
        width: 10,
        length: 10
    },
];

export async function seedProduct() {
    const prisma = new PrismaClient();
    for (const product of productsToInsert) {
        const prod = await prisma.category.findFirst({
            where: { name: product.name },
        });
        if (!prod) await prisma.product.create({data: product});
    }
}