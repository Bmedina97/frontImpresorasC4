import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarImpresoraComponent } from './buscar-impresora.component';

describe('BuscarImpresoraComponent', () => {
  let component: BuscarImpresoraComponent;
  let fixture: ComponentFixture<BuscarImpresoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarImpresoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
