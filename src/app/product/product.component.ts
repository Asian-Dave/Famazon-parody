import { Component } from '@angular/core';
import { IProduct } from '../productModel';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: IProduct[];
  constructor(private cartService:CartService) {
    this.products = products;
  }
  addToCart(index:number){
    this.cartService.addToCart(this.products[index]);
    console.log("item added");
    
  }

}
