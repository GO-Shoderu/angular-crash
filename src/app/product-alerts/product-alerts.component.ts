import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // to be able to receive data from parent, we had to import Input and create a variable using it
  @Input() product: Product | undefined;

  // to be able to pass data to parent, we had to import Output as well as EventEmitter and create a variable using it
  @Output() notify = new EventEmitter(); //a function
  
  constructor() {}

  ngOnInit(): void {}
}
