import { Component } from '@angular/core';
import {AuthenticationService, User} from '../my-new-service.service';
import { Deal } from 'services/deal';
import { DealService } from 'services/deal.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription }  from 'rxjs/Subscription';



@Component({
    selector: 'product-detail',
    templateUrl: 'productdetails.component.html',
    styleUrls: ['productdetails.component.css']
})
export class ProductDetailComponent {
    selectedProduct:Deal;
    product:Deal[];;
    
    constructor(
        private dealService: DealService,
        private route:ActivatedRoute
    ) { }
  
    addToCart(product:Deal[]) {
        console.log(product)
        this.dealService.addToCart(product)
    }
  

    // To get selected product
    ngOnInit() {
        this.route.params.forEach(param => {
            let id = parseInt(param['id'])
            this.dealService.getProduct(id)
                .subscribe(product => this.selectedProduct = product)
        })
    }

    
}
