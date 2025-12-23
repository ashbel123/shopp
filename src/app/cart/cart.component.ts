import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalAmount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  increase(item: CartItem) {
    this.cartService.increaseQty(item.productId);
    this.calculateTotal();
  }

  decrease(item: CartItem) {
    this.cartService.decreaseQty(item.productId);
    this.calculateTotal();
  }

  delete(item: CartItem) {
    this.cartService.removeItem(item.productId);
    this.loadCart();
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
}
