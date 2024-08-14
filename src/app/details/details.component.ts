import { Component } from '@angular/core';
import { IProduct } from '../productModel';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  products:IProduct[];
  product:IProduct;
  constructor(private route:ActivatedRoute,private cartService:CartService){

    this.products = products;   
    console.log(this.products);     
    const id = this.route.snapshot.params['id']
    console.log(id);    
    this.product = this.products[id]
    
  }
  addToCart(){
    this.cartService.addToCart(this.product);
    console.log("item added");
    
  }
  onClick(){
    window.location.reload();
  }

}
