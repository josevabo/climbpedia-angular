import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormCriarContaComponent } from './login-form-criar-conta.component';

describe('FormCriarContaComponent', () => {
  let component: LoginFormCriarContaComponent;
  let fixture: ComponentFixture<LoginFormCriarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormCriarContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormCriarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
