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
});
