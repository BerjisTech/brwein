import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private guestUser: User = {
    id: '0',
    name: 'Guest',
    email: 'guest@example.com',
    email_verified_at: '',
    created_at: '',
    updated_at: '',
    role: 'guest',
    password: '',
    remember_token: '',
    avatar: 'https://picsum.photos/200/300?grayscale&blur=2',
    bio: '',
    location: ''
  };
  private user: User = this.guestUser;
  private currentUser: User = this.guestUser;

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  getGuestUser(): User {
    return this.guestUser;
  }

  generateRandomServices(number_of_users_toGenerate :number = 5){
    let users: User[] = [];
    for (let i = 0; i < number_of_users_toGenerate; i++) {
      users.push({
        id: 'UUID-UUID-UUID-UUID-UUID-UUID',
        name: 'John Doe',
        avatar: `https://picsum.photos/300/300?random=${i + 1}`,
        email: 'string',
        email_verified_at: 'string',
        created_at: 'string',
        updated_at: 'string',
        role: 'string',
        password: 'string',
        remember_token: 'string',
        bio: 'string',
        location: 'string',
      });
    }
    return users;
  }
}