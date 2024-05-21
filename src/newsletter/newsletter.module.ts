import { Module } from '@nestjs/common';

import { NewsletterService } from './newsletter.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NewsletterController } from './newsletter.controller';

@Module({
  controllers: [NewsletterController],
  providers: [NewsletterService],
  imports: [PrismaModule],
})
export class NewsletterModule {}
