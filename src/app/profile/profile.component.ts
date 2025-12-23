import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isEditMode = false;

  // Dummy user data (replace later with API data)
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '9876543210',
    address: 'Bangalore, India'
  };

  editProfile() {
    this.isEditMode = true;
  }

  saveProfile() {
    this.isEditMode = false;
    console.log('Updated user:', this.user);
    // later → call ProfileService API
  }

  cancelEdit() {
    this.isEditMode = false;
  }
}
