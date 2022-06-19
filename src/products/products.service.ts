import { FindProductDTO } from './dto/find-product.dt';
import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaClient) { }

  findAll(filters: FindProductDTO) {

    const where = {};
    let take = undefined;

    if (filters.is_featured != undefined) {
      where['is_featured'] = filters.is_featured == 'true' || false;
    }

    if (filters.q != undefined) {
      where['name'] = { contains: filters.q };
    }

    if (filters.category_id != undefined) {
      where['category_id'] = +filters.category_id;
    }

    if (filters.limit != undefined) {
      take = +filters.limit;
    }

    return this.prisma.product.findMany({
      include: {
        category: true,
      },
      where: where,
      take: take,
    });
  }

  findOne(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id: id,
      },
      include: {
        category: true,
        images: true
      },
    });
  }
}
