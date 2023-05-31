import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions
} from "@angular/material/form-field";
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors
} from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

import { AppComponent } from "./app.component";
import { IntegerInputComponent } from "./form-types/integer-input/integer-input.component";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

const appearance: MatFormFieldDefaultOptions = {
  appearance: "outline"
};

export function NumberValidator(control: FormControl): ValidationErrors {
  console.log("value:", control.value);
  console.log("invalid:", control.valid);
  console.log("touched:", control.touched);
  return /\d{1,3}/.test(control.value) ? null : { number: true };
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,

    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'integer-input',
          component: IntegerInputComponent,
          // wrappers: ['form-field']
        }
      ],
      validators: [
        {
          name: 'number',
          validation: NumberValidator
        }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' }
      ]
    }),
    FormlyMaterialModule
  ],
  declarations: [AppComponent, IntegerInputComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ]
})
export class AppModule {}
