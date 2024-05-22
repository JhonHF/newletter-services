import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Subscriber } from '@prisma/client';

import { SubscriptionService } from './subscription.service';
import { SubscriberService } from 'src/subscriber/subscriber.service';
import { NewsletterService } from 'src/newsletter/newsletter.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('subscription')
export class SubscriptionController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly subscriptionService: SubscriptionService,
    private readonly subscriberService: SubscriberService,
    private readonly newsletterService: NewsletterService,
  ) {}

  @Post()
  async create(
    @Body()
    data: {
      name: string;
      users: Array<Pick<Subscriber, 'name' | 'email'>>;
      bulkData?: File;
    },
  ) {
    const [createdSubscriptions] = await this.prisma.$transaction(async () => {
      const newsletter = await this.newsletterService.create(data.name);

      await this.subscriberService.createMany(data.users);

      const bulkUserIds = await this.subscriberService.findBulkIdByEmail(
        data.users,
      );

      const createdSubscriptions = await this.subscriptionService.createMany(
        bulkUserIds.map((subscriber) => ({
          newsletterId: newsletter.id,
          subscriberId: subscriber.id,
        })),
      );

      return [createdSubscriptions];
    });

    return createdSubscriptions;
  }

  @Get()
  async findAll() {
    return this.subscriptionService.find({});
  }

  @Delete()
  async delete(
    @Query()
    params: {
      subscriber: string;
      id: string;
    },
  ) {
    if (params.subscriber) {
      return this.subscriptionService.deleteMany(Number(params.subscriber));
    }

    return this.subscriptionService.delete(Number(params.id));
  }
}
