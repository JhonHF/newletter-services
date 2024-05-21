import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Newsletter } from '@prisma/client';

import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post()
  create(@Body('name') name: Newsletter['name']) {
    return this.newsletterService.create(name);
  }

  @Get()
  findAll() {
    return this.newsletterService.findAll();
  }

  @Delete()
  delete(@Query('id') id: string) {
    console.log(id);
    return this.newsletterService.delete(Number(id));
  }
}
