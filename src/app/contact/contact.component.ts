import { Component,Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Contact } from 'src/assets/contact';
@Component({
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model = new Contact();
  submitted = false;
  constructor(private router:Router){}
  openPage(){
    this.router.navigate(['support'])
  }

  onSubmit(){ this.submitted = true}
}
