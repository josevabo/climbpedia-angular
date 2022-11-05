import {NgModule} from "@angular/core";
import { MatInputAutofocusDirective } from './directives/mat-input-autofocus.directive';

@NgModule({
  declarations: [
    MatInputAutofocusDirective
  ],
  imports: [],
  exports: [MatInputAutofocusDirective]
  })
export class CoreModule { }
