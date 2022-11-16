import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),

  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,private emailService:EmailService) {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        acceptTerms: [false, Validators.requiredTrue],
        msg:['', Validators.required]

      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    let body = {
      "from":this.form.value.email,
      "to":["info@clexpress.lk"],
      "subject":"contact us from website",
      "templateName":"templateName",
      "modelJson":JSON.stringify(this.form.value)
  };
  console.log(body)
  console.log(JSON.stringify(this.form.value))
    this.emailService.sendMail(body).subscribe((data)=>{
      this.form.reset();
    })
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
