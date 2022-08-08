import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViasHomeComponent } from './vias-home.component';

describe('ViasHomeComponent', () => {
  let component: ViasHomeComponent;
  let fixture: ComponentFixture<ViasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
