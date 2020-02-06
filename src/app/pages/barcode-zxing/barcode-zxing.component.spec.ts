import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeZxingComponent } from './barcode-zxing.component';

describe('BarcodeZxingComponent', () => {
  let component: BarcodeZxingComponent;
  let fixture: ComponentFixture<BarcodeZxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeZxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeZxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
