import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Subscription } from '@prisma/client';

import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  async create(@Body() data: Omit<Subscription, 'id'>) {
    const currentSubscription = await this.subscriptionService.find({
      newsletterId: data.newsletterId,
      subscriberId: data.subscriberId,
    });

    if (currentSubscription.length) {
      throw 'Already subscribed';
    }

    return this.subscriptionService.create(data);
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
