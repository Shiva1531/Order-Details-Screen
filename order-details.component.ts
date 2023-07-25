import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  myForm!: FormGroup;
  showForm: boolean = false; // Variable to control the form visibility

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      orderDate: ['', [Validators.required]],
      orderNumber: ['', [Validators.required, Validators.maxLength(8)]],
      paymentMethod: ['', [Validators.required]],
      billingAddress: ['']
    });
  }

  ngOnInit(): void {}

  toggleForm() {
    this.showForm = !this.showForm; // Toggle the form visibility
  }
}
