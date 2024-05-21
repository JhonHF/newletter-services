import { Injectable } from '@nestjs/common';
import { Subscription } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriptionService {
  constructor(private prisma: PrismaService) {}

  create(data: Omit<Subscription, 'id'>) {
    return this.prisma.subscription.create({
      data,
    });
  }

  find(filters: Partial<Subscription>) {
    return this.prisma.subscription.findMany({
      where: filters,
    });
  }

  delete(id: Subscription['id']) {
    return this.prisma.subscription.delete({
      where: {
        id,
      },
    });
  }

  deleteMany(subscriberId: Subscription['subscriberId']) {
    return this.prisma.subscription.deleteMany({
      where: {
        subscriberId,
      },
    });
  }
}
