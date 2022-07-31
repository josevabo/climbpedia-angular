import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViasComponent } from './card-vias.component';

describe('CardViasComponent', () => {
  let component: CardViasComponent;
  let fixture: ComponentFixture<CardViasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
