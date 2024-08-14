import { Injectable } from '@angular/core';
import { IProduct } from './productModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: IProduct[] = [];
  private cartItemCountCallback: ((count: number) => void) | undefined;

  constructor() { }

  setCartItemCountCallback(callback: (count: number) => void) {
    this.cartItemCountCallback = callback;
  }

  addToCart(product: IProduct) {
    const item = this.cartItems.find(p => p.name === product.name);
    if (item) {
      item.quantity++;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
    this.updateCartItemCount();
    console.log(this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }

  onIncreaseQtty(product: IProduct) {
    const item = this.cartItems.find(p => p.name === product.name);
    if (item) {
      item.quantity++;
    }
    this.updateCartItemCount();
  }

  decreaseQtty(product: IProduct,index:number) {
    const item = this.cartItems.find(p => p.name === product.name);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else {
      this.deleteItems(index)
    }
    this.updateCartItemCount();
  }

  totalData() {
    let sum = 0;
    this.cartItems.forEach(element => {
      sum += element.price * element.quantity;
    });
    return sum;
  }

  deleteItems(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCartItemCount();
  }

  private updateCartItemCount() {
    if (this.cartItemCountCallback) {
      const count = this.cartItems.reduce((total, item) => total + item.quantity, 0);
      this.cartItemCountCallback(count);
    }
  }
}
