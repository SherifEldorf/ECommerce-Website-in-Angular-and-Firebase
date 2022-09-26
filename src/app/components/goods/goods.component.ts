import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Good } from 'src/app/interfaces/good';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  goods:any;
  datasource:any ;
  add=-1;
  
  constructor( private goodserv:GoodsService ,private cartserv:CartService ) {
    
   }
  ngOnInit(): void {
    this.goodserv.getAllGoods().subscribe(data => {

      this.goods = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.get('name') ,
          price: e.payload.doc.get('price'),
          photourl: e.payload.doc.get('photourl'),
        };
      })

    });
  }
  addToCarte(index:number)
  {
    this.add=+index;
  }

  buy( amount :any  )
  {
    let selecteddata=this.goods[this.add];
    let data={
      name:selecteddata.name,
      amount: +amount,
      price:selecteddata.price
    }
    this.cartserv.addToCart(data).then(()=>{
      this.add=-1;
    })

  }
 
}
