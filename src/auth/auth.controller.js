import { BadRequestException, Controller, Post } from '@nestjs/common';
import { UserService } from './auth.service';

@Controller('user')
export class UserController {
  constructor() {
    this.user = new UserService();
  }

  @Post('/register')
  async registerUser(req, res) {
    try {
      const { username, email, password } = req.body;
      // Proceed with the user registration logic here
    } catch (error) {
      throw new BadRequestException('Failed to register user');
    }
  }
}
