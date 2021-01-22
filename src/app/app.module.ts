import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CartComponent } from './components/cart/cart.component';
import { ProductLineComponent } from './components/product-line/product-line.component';
import { CounterComponent } from './components/counter/counter.component';
import {CartService} from './services/cart-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    MainComponent,
    CurrencyPipe,
    CartComponent,
    ProductLineComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
