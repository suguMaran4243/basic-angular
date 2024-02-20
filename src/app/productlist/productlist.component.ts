import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'product-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  name='Sugumaran';
  searchText="";
  listofString:string[]=['Suve','Sugu','Thiru','Sathur'];
 product={
  name:'iPhone-13',
  price:10999,
  color:'gold',
  discount:2999,
  instock:10,
  iphoneImage:"/assets/images/iphone13.jpeg",
  addToCart:0,
  
  
 }
 onNameChange(event:any)
 {
  this.name=event.target.value;
 
 }
 incrementValue()
 {
  if(this.product.addToCart <this.product.instock)
  {
    this.product.addToCart++;
  }
 
 }
 decrementValue()
 {
  if(this.product.addToCart >0)
  {
    this.product.addToCart--;
  }
  
 }
 searchTextChange(event :any)
 {
   this.searchText=event.target.value;
 }
 
 
}
