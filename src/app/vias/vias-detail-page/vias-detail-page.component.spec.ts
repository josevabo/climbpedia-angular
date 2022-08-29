import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViasDetailPageComponent } from './vias-detail-page.component';

describe('ViasDetailPageComponent', () => {
  let component: ViasDetailPageComponent;
  let fixture: ComponentFixture<ViasDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViasDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViasDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
