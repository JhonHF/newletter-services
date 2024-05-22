import { Module } from '@nestjs/common';
import { SubscriptionModule } from './subscription/subscription.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    SubscriberModule,
    SubscriptionModule,
    NewsletterModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
