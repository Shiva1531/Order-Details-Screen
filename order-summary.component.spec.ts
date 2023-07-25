import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSummaryComponent]
    });
    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   it('should display the correct content for each order item', () => {
    fixture.detectChanges();
    const orderItems = fixture.nativeElement.querySelectorAll('.order-item');
    expect(orderItems.length).toBe(7);

    expect(orderItems[0].textContent).toContain('Subtotal for 2 items');
    expect(orderItems[1].textContent).toContain('Protection Plans');
    expect(orderItems[2].textContent).toContain('Furniture');
    expect(orderItems[3].textContent).toContain('Delivery');
    expect(orderItems[4].textContent).toContain('State Recycling Fee');
    expect(orderItems[5].textContent).toContain('Taxes');
});
it('should apply "bolder" class to the "Estimated Total" amount', () => {
  fixture.detectChanges();
  const estimatedTotalElement = fixture.nativeElement.querySelector('.bolder');
  expect(estimatedTotalElement).toBeTruthy();
});
});
