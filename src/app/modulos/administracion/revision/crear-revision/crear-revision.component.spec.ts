import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRevisionComponent } from './crear-revision.component';

describe('CrearRevisionComponent', () => {
  let component: CrearRevisionComponent;
  let fixture: ComponentFixture<CrearRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
