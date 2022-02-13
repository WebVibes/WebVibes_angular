import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  myform = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
    services: new FormControl(),
    message:new FormControl(''),
    dataProtection: new FormControl(false, [Validators.requiredTrue]),
  });

  servicesList = ['Logó, arculat tervezés', 'Webdesign', 'Webfejlesztés', 'Webshop készítés'];

  checked = false;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() { 
    console.log(this.checked);
    console.log(this.myform);
   }

  getEmailErrorMessage() {
    if (this.myform.controls['email'].hasError('required')) {
      return 'Kérlek add meg az email címed';
    }

    return this.myform.controls['email'].hasError('email') ? 'Nem érvényes email cím' : '';
  }

  getNameErrorMessage() {
    return this.myform.controls['email'].hasError('required') ? 'Kérlek add meg a neved' : '';
  }

  getServicesErrorMessage() {
    return this.myform.controls['services'].hasError('required') ? 'Kérlek válassz legalább egy lehetőséget' : '';
  }

}
