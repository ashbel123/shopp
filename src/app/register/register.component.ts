import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router){};

  // Initialize the form group with form controls and validations
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),  // Add required validation
    email: new FormControl('', [Validators.required, Validators.email]),  // Email should be valid
    phone: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[0-9]{10}$/)  // Example: simple phone validation (10 digits)
    ]),
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(4),  // Username should be at least 4 characters long
      Validators.maxLength(20)
    ]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(6)  // Password should be at least 6 characters long
    ])
  });

  // Handle form submission
  onSubmit() {
    if (this.registerForm.valid) {
      console.warn(this.registerForm.value);  // Log the form values if valid
    } else {
      console.error('Form is not valid');  // Log an error if the form is invalid
    }
  }

  renderLogin(login: string){
    this.router.navigate([login]);
  }

  renderData(data: string){
    this.router.navigate([data]);
  }
}
