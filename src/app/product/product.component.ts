import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];          // original list
  filteredProducts: Product[] = [];  // displayed list
  searchText: string = '';

  quantityMap: { [key: string]: number } = {};

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = [
      new Product('1', 'Apple', 'iPhone 15', 10, 79999),
      new Product('2', 'Samsung', 'Galaxy S23', 15, 74999),
      new Product('3', 'Sony', 'Headphones', 20, 19999),
      new Product('4', 'Dell', 'Laptop', 8, 55999)
    ];

    // initially show all products
    this.filteredProducts = [...this.products];

    // init quantity map ONCE
    this.products.forEach(p => {
      this.quantityMap[p.productId!] = 0;
    });
  }

  /* 🔍 SEARCH LOGIC (FIXED & SAFE) */
  searchProduct(): void {
    const text = this.searchText.trim().toLowerCase();

    if (!text) {
      this.filteredProducts = [...this.products];
      return;
    }

    this.filteredProducts = this.products.filter(p =>
      p.brand?.toLowerCase().includes(text) ||
      p.description?.toLowerCase().includes(text)
    );
  }

  addQty(id: string) {
    this.quantityMap[id]++;
  }

  subtractQty(id: string) {
    if (this.quantityMap[id] > 0) {
      this.quantityMap[id]--;
    }
  }

  addToCart(product: Product) {
    const qty = this.quantityMap[product.productId!] || 1;

    this.cartService.addToCart({
      productId: product.productId!,
      name: product.description!,
      price: product.price!,
      quantity: qty
    });

    // reset quantity after add
    this.quantityMap[product.productId!] = 0;

    this.router.navigate(['/cart']);
  }
}
