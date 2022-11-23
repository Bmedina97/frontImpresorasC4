import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearImpresoraComponent } from './crear-impresora.component';

describe('CrearImpresoraComponent', () => {
  let component: CrearImpresoraComponent;
  let fixture: ComponentFixture<CrearImpresoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearImpresoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
