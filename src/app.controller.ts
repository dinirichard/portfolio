import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactDTO } from './models/contact.dto';

@Controller('api/contact')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('idea/:id')
  createComment(@Body() data: ContactDTO) {
    return this.appService.makeContact(data);
  }

}
