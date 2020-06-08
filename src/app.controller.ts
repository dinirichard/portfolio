import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactDTO } from './models/contact.dto';

@Controller('contact')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  createComment(@Body() data: ContactDTO) {
    this.appService.makeContact(data);
    return HttpStatus.OK;
  }

}
