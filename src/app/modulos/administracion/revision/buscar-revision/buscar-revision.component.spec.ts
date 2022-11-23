import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRevisionComponent } from './buscar-revision.component';

describe('BuscarRevisionComponent', () => {
  let component: BuscarRevisionComponent;
  let fixture: ComponentFixture<BuscarRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
