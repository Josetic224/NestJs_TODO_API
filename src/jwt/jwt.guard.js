import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtGuard {
  canActivate(context) {
    return true;
  }
}
