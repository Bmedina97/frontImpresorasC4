import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRevisionComponent } from './eliminar-revision.component';

describe('EliminarRevisionComponent', () => {
  let component: EliminarRevisionComponent;
  let fixture: ComponentFixture<EliminarRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
