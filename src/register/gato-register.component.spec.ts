import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoRegisterComponent } from './gato-register.component';

describe('GatoRegisterComponent', () => {
  let component: GatoRegisterComponent;
  let fixture: ComponentFixture<GatoRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatoRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
