import { Injectable } from '@angular/core';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {

  private cartItems: CartItem[] = [];

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: CartItem) {
    const existing = this.cartItems.find(i => i.productId === item.productId);
    if (existing) existing.quantity += item.quantity;
    else this.cartItems.push(item);
  }

  increaseQty(id: string) {
    const item = this.cartItems.find(i => i.productId === id);
    if (item) item.quantity++;
  }

  decreaseQty(id: string) {
    const item = this.cartItems.find(i => i.productId === id);
    if (item && item.quantity > 1) item.quantity--;
  }

  removeItem(id: string) {
    this.cartItems = this.cartItems.filter(i => i.productId !== id);
  }
}
