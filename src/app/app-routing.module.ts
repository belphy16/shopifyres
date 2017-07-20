import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { PublicDealsComponent } from './products/public-deals.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
  {path:'productdetails/:id',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  { path: 'products', component: PublicDealsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})

export class AllMartRoutingModule { }
