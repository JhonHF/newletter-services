import { Injectable } from '@nestjs/common';
import { Subscriber, Subscription } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriberService {
  constructor(private prisma: PrismaService) {}

  create(data: Pick<Subscriber, 'email' | 'name'>) {
    return this.prisma.subscriber.create({
      data,
    });
  }

  createMany(data: Array<Pick<Subscriber, 'email' | 'name'>>) {
    return this.prisma.subscriber.createMany({
      data,
    });
  }

  findAll({ newsletterId }: Pick<Subscription, 'newsletterId'>) {
    return this.prisma.subscriber.findMany({
      where: {
        subscriptions: {
          every: {
            newsletterId,
          },
        },
      },
    });
  }

  findBulkIdByEmail(users: Array<Pick<Subscriber, 'name' | 'email'>>) {
    return this.prisma.subscriber.findMany({
      where: {
        email: { in: users.map((subscriber) => subscriber.email) },
      },
      select: { id: true },
    });
  }

  findOne(filters: Partial<Subscriber>) {
    return this.prisma.subscriber.findFirst({
      where: {
        ...filters,
      },
    });
  }

  update(id: number, data: Partial<Subscriber>) {
    return this.prisma.subscriber.update({
      where: {
        id,
      },
      data,
    });
  }
}
