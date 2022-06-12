import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
    constructor(private readonly prisma: PrismaService) {}

    findAllCategories(limit: number) {
        return this.prisma.category.findMany({
            take: limit
        });

    }
}
