import { Component} from '@angular/core';
import { IProduct } from '../productModel';
import { products } from '../products';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css',
})
export class FeaturedComponent {
  products: IProduct[];
  constructor(private router:Router,private cartService:CartService) {
    this.products = products;
  
  }

  addToCart(index:number){
    this.cartService.addToCart(this.products[index]);
    console.log("item added");
    
  }
}
