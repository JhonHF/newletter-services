import { Controller, Post, Req } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async createMail(@Req() req: Request) {
    const data = await req.formData();
    const file = data.get('attachment') as File;
    const newsletter = data.get('newsletter') as string;
    const bytes = await file.arrayBuffer();

    return await this.emailService.sendMail({
      from: 'Newsletter mailer',
      to: 'test@test.com',
      subject: newsletter,
      html: '<div> hola <div>',
      attachments: [
        {
          filename: 'info',
          content: Buffer.from(bytes),
        },
      ],
    });
  }
}
