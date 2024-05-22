import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import { transporter } from 'utils/nodemailer';

@Injectable()
export class EmailService {
  sendMail(data: Mail.Options) {
    return transporter.sendMail(data);
  }
}
