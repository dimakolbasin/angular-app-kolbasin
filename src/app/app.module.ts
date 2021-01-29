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
import { CartService } from './services/cart-data.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DeviceComponent } from './components/device/device.component';
import { ProductDataService } from './services/product-data.service';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



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
    CounterComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    DeviceComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CartService, ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
