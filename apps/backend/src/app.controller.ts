import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ola')
  digaOla(): any {
    return {
      mensagem: 'Olá, mundo!',
    };
  }
}
