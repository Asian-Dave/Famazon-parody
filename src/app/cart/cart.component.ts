import { Component } from '@angular/core';
import { IProduct } from '../productModel';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: IProduct[] = [];
  total: number = 0;
  service: number = 10;
  discount: number = 15;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cartService.totalData();
  }

  decreaseQuantity(product: IProduct, index:number) {
    this.cartService.decreaseQtty(product,index);
    this.updateTotal();
  }

  increaseQuantity(product: IProduct) {
    this.cartService.onIncreaseQtty(product);
    this.updateTotal();
  }

  removeProduct(index: number) {
    this.cartService.deleteItems(index);
    this.updateTotal();
    this.cartItems = this.cartService.getCartItems();
  }

  placeOrder(): void {
    console.log('Order placed successfully!');
  }
}
