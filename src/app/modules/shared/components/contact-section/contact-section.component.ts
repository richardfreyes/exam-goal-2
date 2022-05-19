import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.sass']
})
export class ContactSectionComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.autoRun();
  }

  autoRun() {
    this.listeners();
    this.initialisers();
  }

  initialisers() {
    this.initForm();
  }

  listeners() { }

  initForm() {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        day: ['', Validators.required],
        time: ['', Validators.required],
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) { return; }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
