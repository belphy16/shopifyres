import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PublicDealsComponent } from './products/public-deals.component';
import { AllMartRoutingModule } from './app-routing.module';
import { DealService } from 'services/deal.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './productdetails/productdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicDealsComponent,
    NavbarComponent,
    CartComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AllMartRoutingModule
  ],
  exports:[
    NavbarComponent
  ],
  providers: [DealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
