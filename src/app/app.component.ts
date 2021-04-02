import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('productList', {static: true})  
  productList: ProductListComponent;
  title = 'angular-p2-lab2';
  // if implements OnInit - must have tihs ngOnInit if not its show error
  ngOnInit() : void{
    
    this.productList.products =[
      {  name: 'ส้มโอ',
        price: 990
      },
      {
        name: 'แตงโม',
        price: 1000
      },
      {
        name: 'มะพร้าวนํ้าหอม',
        price: 500
      }
      ];
    }
   
  }

