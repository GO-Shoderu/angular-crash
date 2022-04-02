import { Component, OnInit } from '@angular/core';

//importing these in order to display each product based on the url of the browser
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  // defining the product property here
  product: Product | undefined;

  // injecting the constructor as well as declaring the variable and defining it
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    // getting product id from the current route using these
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //using the id provided in the route to find the product that corresponds with the id
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
