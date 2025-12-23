import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  selectedMethod: 'card' | 'upi' = 'card';

  cardDetails = {
    cardNumber: '',
    expiry: '',
    cvv: ''
  };

  upiId = '';

  payNow() {
    if (this.selectedMethod === 'card') {
      console.log('Paying with Card:', this.cardDetails);
    } else {
      console.log('Paying with UPI:', this.upiId);
    }

    alert('Payment successful (dummy)');
  }
}
