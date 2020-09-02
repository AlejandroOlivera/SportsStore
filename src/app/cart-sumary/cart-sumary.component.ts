import { Component} from '@angular/core';
import {Cart} from '../model/cart.model';

@Component({
  selector: 'app-cart-sumary',
  templateUrl: './cart-sumary.component.html',
  styleUrls: ['./cart-sumary.component.scss']
})
export class CartSumaryComponent {

  constructor(public cart: Cart) { }
}
