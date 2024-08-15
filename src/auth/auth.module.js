import { Module } from '@nestjs/common';
import { UserController } from './auth.controller';
import { UserService } from './auth.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class AuthModule{}
