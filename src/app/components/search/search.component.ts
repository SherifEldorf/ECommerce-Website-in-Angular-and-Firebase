import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Good } from 'src/app/interfaces/good';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  goods!:Good[];
  selectedgoods!:Good[];

  datasource:any ;
  add=-1;
  testsearchflag:Boolean=true;

  constructor(private goodserv:GoodsService ,private cartserv:CartService , private authserv:AuthService) { }

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

    });}
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
    seeResults(  )
    {
      this.testsearchflag=false;

      this.selectedgoods = this.goods.filter(x=>x.name==this.authserv.searchvalue);
       
    }



  }


