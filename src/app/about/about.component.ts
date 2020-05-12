import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private fb: FormBuilder) {    
    this.createForm();
  }
  feedbackForm: FormGroup;
  @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    'email': '',
    'subject':''
  };

  validationMessages = {
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'subject': {
      'required': 'Subject is required.'
    }
  };

  ngOnInit(): void {
  }


  createForm() {
    this.feedbackForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      subject: '',
      message: ''
    });
    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any){
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){

  }
}
