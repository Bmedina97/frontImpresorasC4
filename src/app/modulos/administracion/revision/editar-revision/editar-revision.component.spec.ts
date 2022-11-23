import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRevisionComponent } from './editar-revision.component';

describe('EditarRevisionComponent', () => {
  let component: EditarRevisionComponent;
  let fixture: ComponentFixture<EditarRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
