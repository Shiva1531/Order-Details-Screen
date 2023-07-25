import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeliveryDetailsComponent } from './home-delivery-details.component';

describe('HomeDeliveryDetailsComponent', () => {
  let component: HomeDeliveryDetailsComponent;
  let fixture: ComponentFixture<HomeDeliveryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDeliveryDetailsComponent]
    });
    fixture = TestBed.createComponent(HomeDeliveryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   it('should set correct image sources', () => {
    fixture.detectChanges();
    const imageElements = fixture.nativeElement.querySelectorAll('.shipment-image img');
    expect(imageElements[0].src).toContain('assets/images/sofa1.jpg');
    expect(imageElements[1].src).toContain('assets/images/sofa2.jpg');
  });
});
