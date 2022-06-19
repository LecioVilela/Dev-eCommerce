import { PrismaClient } from '@prisma/client';

export const productImageToInsert = [
    {
        product_id: 1,
        image_url: 'https://via.placeholder.com/360x360',
        description: 'Imagem 01 do produto 01',
    },
    {
        product_id: 2,
        image_url: 'https://via.placeholder.com/360x360',
        description: 'Imagem 02 do produto 02',
    },
    {
        product_id: 3,
        image_url: 'https://via.placeholder.com/360x360',
        description: 'Imagem 03 do produto 03',
    },
    {
        product_id: 4,
        image_url: 'https://via.placeholder.com/360x360',
        description: 'Imagem 04 do produto 04',
    },
];

export async function seedProductImage() {
    const prisma = new PrismaClient();
    for (const productImage of productImageToInsert) {
        const obj = await prisma.productImage.findFirst({
            where: { description: productImage.description },
        });
        if (!obj) await prisma.productImage.create({ data: productImage });
    }
}