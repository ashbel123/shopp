import { Injectable } from '@angular/core';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(
      i => i.productId === item.productId
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
  }

  increaseQty(productId: string) {
    const item = this.cartItems.find(i => i.productId === productId);
    if (item) {
      item.quantity++;
    }
  }

  decreaseQty(productId: string) {
    const item = this.cartItems.find(i => i.productId === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(productId: string) {
    this.cartItems = this.cartItems.filter(
      item => item.productId !== productId
    );
  }
}
