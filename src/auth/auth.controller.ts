import { AuthDTO } from 'src/dto';
import { AuthService } from './auth.service';
import { Body, Controller, Get, ParseIntPipe, Post, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: AuthDTO) {
    return this.authService.register(dto);
  }
  @Post('login')
  login(@Body() dto: AuthDTO) {
    return this.authService.login(dto);
  }
}
