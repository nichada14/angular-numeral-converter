import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeralConverterComponent } from './numeral-converter.component';

describe('NumeralConverterComponent', () => {
  let component: NumeralConverterComponent;
  let fixture: ComponentFixture<NumeralConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeralConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeralConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
