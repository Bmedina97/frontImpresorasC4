import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarImpresoraComponent } from './eliminar-impresora.component';

describe('EliminarImpresoraComponent', () => {
  let component: EliminarImpresoraComponent;
  let fixture: ComponentFixture<EliminarImpresoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarImpresoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
