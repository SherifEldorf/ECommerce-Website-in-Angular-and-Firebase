import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shopping } from 'src/app/interfaces/shopping';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Array<Shopping>=[];
  datasaved:boolean=false;
  totalcoast:number =0;

  constructor(private cartserv:CartService , private router:Router ) {
    

    
  }

  ngOnInit(): void {
    this.cartserv.getCart().subscribe(carte=>{
      this.cart=carte.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.get('name'),
          price: e.payload.doc.get('price'),
          amount: e.payload.doc.get('amount'),
        };
      })
    });
    
  }
  deleteitem( index:number )
  {
    this.cartserv.deleteitem(this.cart[index].id)
  }
  update( index:number )
  {
    this.cartserv.updateitem(this.cart[index].id,this.cart[index].amount);
    this.datasaved=true;
   
  }
  calcutotalcoast()
  {
    for (let i = 0; i < this.cart.length; i++) {
      this.totalcoast =   this.totalcoast + (this.cart[i].price*this.cart[i].amount);
      
    }
  }
  order(  )
  {
    for (let i = 0; i < this.cart.length; i++) {
      this.cartserv.ordergoods(this.cart[i])
      }
      this.router.navigate([''])
  }
  
 
  

}
