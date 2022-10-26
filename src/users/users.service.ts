import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'will',
      username: 'will',
      password: 'mypassword',
    },
    {
      id: 2,
      name: 'anna',
      username: 'anna',
      password: 'tomato',
    },
    {
      id: 3,
      name: 'jorge',
      username: 'jorge',
      password: 'jokepw',
    },
  ];
}
