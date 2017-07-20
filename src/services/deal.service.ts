import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable,Subject } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Deal } from './deal';

@Injectable()
export class DealService {
  private publicDealsUrl = 'http://localhost:3001/api/deals/public';
  public cart;
  public cart$:Subject<any>;


  
  constructor(private http: Http) { 
       this.cart = [];
        this.cart$ = new Subject();
  }
 
    addToCart(product:Deal[]) {
    
        this.cart = [...this.cart, product]
        this.cart$.next(product)
        
    }
  public getPublicDeals(): Observable<Deal[]> {
        return this.http.get(this.publicDealsUrl)
            .map((response: Response) => <Deal[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<Deal> {
        return this.getPublicDeals()
            .map((products: Deal[]) => products.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
