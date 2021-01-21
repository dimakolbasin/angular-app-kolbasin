import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CartTemplateComponent } from './components/cart-template/cart-template.component';
import { ProductLineTemplateComponent } from './components/product-line-template/product-line-template.component';
import { CounterTemplateComponent } from './components/counter-template/counter-template.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    MainComponent,
    CurrencyPipe,
    CartTemplateComponent,
    ProductLineTemplateComponent,
    CounterTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
