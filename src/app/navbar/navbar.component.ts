import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.setCartItemCountCallback(this.updateCartItemCount.bind(this));
    this.cartItemAmount = this.cartService.getCartItems().reduce((total, item) => total + item.quantity, 0);
  }

  updateCartItemCount(count: number) {
    this.cartItemAmount = count;
  }
}
