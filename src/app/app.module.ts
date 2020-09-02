import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import {StoreComponent} from './store/store.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {StoreFirstGuard} from './store/storeFirst.guard';


@NgModule({
  imports: [BrowserModule, StoreModule, RouterModule.forRoot([
    {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
    {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
    {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
    {path: '**', redirectTo: '/store'}
  ])],
  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
