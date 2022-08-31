import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViasFavoritasComponent } from './vias-favoritas.component';

describe('ViasFavoritasComponent', () => {
  let component: ViasFavoritasComponent;
  let fixture: ComponentFixture<ViasFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViasFavoritasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
