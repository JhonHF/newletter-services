import { Module } from '@nestjs/common';
import { SubscriberModule } from './subscriber/subscriber.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { NewsletterModule } from './newsletter/newsletter.module';

@Module({
  imports: [SubscriberModule, SubscriptionModule, NewsletterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
