import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;
  private currentUser: User | null = null;
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

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getGuestUser(): User {
    return this.guestUser;
  }
}