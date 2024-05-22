import { Module } from '@nestjs/common';

import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SubscriberController],
  providers: [SubscriberService],
  imports: [PrismaModule],
  exports: [SubscriberService],
})
export class SubscriberModule {}
