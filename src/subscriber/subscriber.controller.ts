import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { Subscriber } from '@prisma/client';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Post()
  async create(@Body() data: Subscriber) {
    const registeredUser = await this.subscriberService.findOne({
      email: data.email,
    });

    if (registeredUser) {
      throw 'already exist';
    }

    return this.subscriberService.create(data);
  }

  @Get()
  findAll(@Query('newsletter') newsletter: string) {
    return this.subscriberService.findAll({
      newsletterId: Number(newsletter),
    });
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Subscriber>) {
    return this.subscriberService.update(id, data);
  }
}
