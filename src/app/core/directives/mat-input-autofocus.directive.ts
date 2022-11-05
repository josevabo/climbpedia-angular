import {Directive, OnInit} from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[matInputAutofocus]'
})
export class MatInputAutofocusDirective implements OnInit {

  constructor(private matInput: MatInput) { }

  ngOnInit(): void {
    //The timeout is required to delay focusing the element because matInput does
    // not properly function at the moment of creating yet.
    setTimeout(() => {
      this.matInput.focus();
    });
  }

}
