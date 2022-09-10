import { AuthTestService } from './../services/auth-test.service';
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  template: `
<form [formGroup]="form">
    <fieldset>
        <legend>Login</legend>
        <div class="form-field">
            <label>Email:</label>
            <input name="email" formControlName="email">
        </div>
        <div class="form-field">
            <label>Password:</label>
            <input name="password" formControlName="password"
                   type="password">
        </div>
    </fieldset>
    <div class="form-buttons">
        <button class="button button-primary"
                (click)="login()">Login</button>
    </div>
</form>`})
export class LoginComponent {
    form:FormGroup;

    constructor(private fb:FormBuilder,
                 private authService: AuthTestService,
                 private router: Router) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    login() {
        const val = this.form.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe(
                    (response) => {
                        console.log("User is logged in");
                        console.log(response)
                        this.router.navigateByUrl('/');
                    }
                );
        }
    }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
