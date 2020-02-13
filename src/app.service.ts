import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import { ContactDTO } from './models/contact.dto';

@Injectable()
export class AppService {

  constructor(private readonly mailerService: MailerService) { }

  public makeContact(contactModel: ContactDTO): void {
    console.log('services');
    this
      .mailerService
      .sendMail({
        to: 'danielidem@outlook.com', // list of receivers
        from: contactModel.email, // sender address
        subject: 'Contact from DanielIdem.com', // Subject line
        text: contactModel.message, // plaintext body
        html: `<b>Hello frm ${contactModel.name} </b>`, // HTML body content
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
