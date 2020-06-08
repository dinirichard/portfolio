import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import { ContactDTO } from './models/contact.dto';

@Injectable()
export class AppService {

  constructor(private readonly mailerService: MailerService) { }

  public makeContact(contactModel: ContactDTO): void {
    this
      .mailerService
      .sendMail({
        to: 'danielidem@outlook.com', // list of receivers
        from: contactModel.email, // sender address
        subject: 'Contact from DanielIdem.com', // Subject line
        text: contactModel.message, // plaintext body
        html: `<b>Hello from ${contactModel.name} </b>`, // HTML body content
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException('Mail not working', HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
