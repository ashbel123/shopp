import { Component, OnInit } from '@angular/core';

interface Order {
  orderId: string;
  orderDate: string;
  totalAmount: number;
  status: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  ngOnInit(): void {
    // Dummy data (replace later with API call)
    this.orders = [
      {
        orderId: 'ORD1001',
        orderDate: '2025-01-10',
        totalAmount: 24999,
        status: 'Delivered'
      },
      {
        orderId: 'ORD1002',
        orderDate: '2025-01-18',
        totalAmount: 79999,
        status: 'Shipped'
      },
      {
        orderId: 'ORD1003',
        orderDate: '2025-02-01',
        totalAmount: 15999,
        status: 'Processing'
      }
    ];
  }
}
