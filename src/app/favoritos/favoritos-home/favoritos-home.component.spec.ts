import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosHomeComponent } from './favoritos-home.component';

describe('FavoritosComponent', () => {
  let component: FavoritosHomeComponent;
  let fixture: ComponentFixture<FavoritosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
