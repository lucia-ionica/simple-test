import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiniiProductieComponent } from './linii-productie.component';

describe('LiniiProductieComponent', () => {
  let component: LiniiProductieComponent;
  let fixture: ComponentFixture<LiniiProductieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiniiProductieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiniiProductieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
