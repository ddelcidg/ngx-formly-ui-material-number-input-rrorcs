import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {
    'integer-input': 3,
    input: 3,
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'int-input',
      type: 'integer-input',
      templateOptions: {
        label: 'Input integer',
        placeholder: 'Input placeholder',
      },
    },
    /*{
      key: 'input',
      type: 'input',
      templateOptions: {
        type: 'number',
        min: 0,
        max: 10,
        placeholder: 'Enter a number between 0 and 10',
        hideButtons: false,
        pattern: /^[0-9]+$/,
        patternValidationMessage: 'Only numbers between 0 and 10 are allowed',
        modelChange: (value) => {
          console.log('valueChanges', value);
        },
      },
    },*/
    {
      key: 'myInput',
      type: 'input',
      templateOptions: {
        label: 'My Input',
        type: 'number',
        min: 0,
        max: 10,
        placeholder: 'Enter a number between 0 and 10',
        hideButtons: true,
        pattern: /^(?:[0-9]|10)$/,
      },
      hooks: {
        onInit: (field) => {
          // Subscribe to value changes and call a method on every change
          field.formControl.valueChanges.subscribe((value) => {
            this.onChange(value);
          });
        },
      },
    },
    {
      key: 'textarea',
      type: 'textarea',
      templateOptions: {
        label: 'Textarea',
        placeholder: 'Textarea placeholder',
        required: true,
      },
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'Checkbox',
      },
    },
    {
      key: 'select',
      type: 'select',
      templateOptions: {
        label: 'Select',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ],
      },
    },
    {
      key: 'radio',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
  onChange(value: any) {
    // Perform actions on change
    const regex = /^(?:[0-9]|10)$/; // Regular expression to match only numeric values

    if (!regex.test(value) || value < 0 || value > 10) {
      this.form.get('myInput').setValue(null, { emitEvent: false });
    }
    console.log('Value changed:', value);
  }
}
