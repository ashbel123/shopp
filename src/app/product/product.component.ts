import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  searchText: string = '';

  // Quantity handling (per product id)
  quantityMap: { [key: string]: number } = {};

  ngOnInit(): void {
    // Dummy data (later replace with API call)
    this.products = [
      new Product('1', 'Apple', 'iPhone 15', 10, 79999),
      new Product('2', 'Samsung', 'Galaxy S23', 15, 74999),
      new Product('3', 'Sony', 'Noise Cancelling Headphones', 20, 19999),
      new Product('4', 'Dell', 'Inspiron Laptop', 8, 55999)
    ];

    this.filteredProducts = [...this.products];

    // Initialize quantities
    this.products.forEach(p => {
      if (p.productId) {
        this.quantityMap[p.productId] = 0;
      }
    });
  }

  searchProduct(): void {
    const text = this.searchText.toLowerCase().trim();

    this.filteredProducts = this.products.filter(product =>
      product.brand?.toLowerCase().includes(text) ||
      product.description?.toLowerCase().includes(text)
    );
  }

  addQty(productId: string): void {
    this.quantityMap[productId]++;
  }

  subtractQty(productId: string): void {
    if (this.quantityMap[productId] > 0) {
      this.quantityMap[productId]--;
    }
  }
}
