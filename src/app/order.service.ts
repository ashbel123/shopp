import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Order {
  orderId: string;
  orderDate: string;
  totalAmount: number;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class OrderService {

  private orders: Order[] = [
    { orderId: 'ORD1', orderDate: '2025-01-10', totalAmount: 20000, status: 'Delivered' },
    { orderId: 'ORD2', orderDate: '2025-02-01', totalAmount: 50000, status: 'Processing' }
  ];

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }

  getOrderById(id: string): Observable<Order | undefined> {
    return of(this.orders.find(o => o.orderId === id));
  }
}
