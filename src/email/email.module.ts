import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmailService } from './email.service';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
  imports: [PrismaModule],
})
export class EmailModule {}
