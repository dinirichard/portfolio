import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactDTO } from './models/contact.dto';

@Controller('api/contact')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  createComment(@Body() data: ContactDTO) {
    return this.appService.makeContact(data);
  }

}
