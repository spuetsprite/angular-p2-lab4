import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  OnSelected: EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  select(){
    this.OnSelected.emit(this.product);
    // alert(`Product ${this.product.name}`)
    // console.log(this.product.name)
  }

}
