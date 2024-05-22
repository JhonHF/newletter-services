import { createTransport } from 'nodemailer';

export const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'lorna.rippin@ethereal.email',
    pass: 'gaYC6bgU3zNvbt1WeY',
  },
});
