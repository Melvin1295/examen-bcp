import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarTasaCambioComponent } from './cambiar-tasa-cambio.component';

describe('CambiarTasaCambioComponent', () => {
  let component: CambiarTasaCambioComponent;
  let fixture: ComponentFixture<CambiarTasaCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarTasaCambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarTasaCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
