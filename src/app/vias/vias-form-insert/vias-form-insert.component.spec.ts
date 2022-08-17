import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViasFormInsertComponent } from './vias-form-insert.component';

describe('ViasFormInsertComponent', () => {
  let component: ViasFormInsertComponent;
  let fixture: ComponentFixture<ViasFormInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViasFormInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViasFormInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
