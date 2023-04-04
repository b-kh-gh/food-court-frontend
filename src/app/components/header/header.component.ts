import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/shared/models/User';
import {CartService} from 'src/app/shared/services/cart.service';
import {UserService} from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;
  user!: User;

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {

  }

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cartQuantity = cart.totalCount;
    });
    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }
}
