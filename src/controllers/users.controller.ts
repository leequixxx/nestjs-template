import {Controller, Get} from '@nestjs/common';

import {UsersService} from '../services/users.service';
import {User} from '../entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get()
  public all(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
