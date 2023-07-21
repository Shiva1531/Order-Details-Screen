import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent  implements OnInit{
  orderForm!: FormGroup;
  showForm: boolean = false; // Variable to control the form visibility

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      orderDate: [''],
      orderNumber: [''],
      paymentMethod: [''],
      billingAddress: ['']
    });
  }
  toggleForm() {
    this.showForm = !this.showForm; // Toggle the form visibility
  }

}
