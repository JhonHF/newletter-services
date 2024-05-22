import { Module } from '@nestjs/common';

import { SubscriptionController } from './subscription.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SubscriptionService } from './subscription.service';
import { NewsletterModule } from 'src/newsletter/newsletter.module';
import { SubscriberModule } from 'src/subscriber/subscriber.module';

@Module({
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  imports: [PrismaModule, NewsletterModule, SubscriberModule],
})
export class SubscriptionModule {}
