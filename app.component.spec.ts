import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeDeliveryDetailsComponent } from './home-delivery-details/home-delivery-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,OrderDetailsComponent,OrderSummaryComponent,HomeDeliveryDetailsComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample-order-page'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sample-order-page');
  });

 // it('should render title', () => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  fixture.detectChanges();
   // const compiled = fixture.nativeElement as HTMLElement;
   // expect(compiled.querySelector('.content span')?.textContent).toContain('sample-order-page app is running!');
 // });
});
