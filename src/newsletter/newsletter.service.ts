import { Injectable } from '@nestjs/common';
import { Newsletter, Subscriber } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NewsletterService {
  constructor(private prisma: PrismaService) {}

  create(name: Newsletter['name']) {
    return this.prisma.newsletter.create({
      data: {
        name,
      },
    });
  }

  findAll() {
    return this.prisma.newsletter.findMany();
  }

  findByUser(subscriber: Subscriber['id']) {
    return this.prisma.newsletter.findMany({
      where: {
        subscriptions: {
          every: {
            subscriberId: subscriber,
          },
        },
      },
    });
  }

  delete(id: Newsletter['id']) {
    return this.prisma.newsletter.delete({
      where: {
        id,
      },
    });
  }
}
