import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarImpresoraComponent } from './editar-impresora.component';

describe('EditarImpresoraComponent', () => {
  let component: EditarImpresoraComponent;
  let fixture: ComponentFixture<EditarImpresoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarImpresoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
