import { Component } from '@angular/core';
import { DataService } from '../home-page/lands';
import { Land } from '../models/land';
import { UserService } from '../services/userService';
import { User } from '../models/user';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {
  lands: Land[];
  currentUser: User | null;

  constructor(private dataService: DataService, private userService: UserService) {
    this.lands = dataService.getAllElements();
    this.currentUser = userService.getCurrentUser() ? userService.getCurrentUser() : null;
  }
  deleteFav(index: number) {
    if (this.currentUser?.favorites) {
      this.currentUser.favorites.splice(index, 1);
      this.userService.updateUserData({ favorites: this.currentUser.favorites });
    }
  }
}
