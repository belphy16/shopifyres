import { Component, OnInit } from '@angular/core';
import { DealService } from 'services/deal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    public cart = [];
    public totalPrice;
  constructor(private dealService: DealService) { }

  ngOnInit() {

    

        //this.getTotalPrice()
        
     //
  }


  checkOut(){
    alert("Success");
  }
}
