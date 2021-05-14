import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  phone: string;
  FormData: FormGroup;
  spreadSheetUrl: string;
  phonepattern = '^((\\+91-?)|0)?[0-9]{10}$';
  showSent = false;
  constructor(private builder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      phone: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.pattern(this.phonepattern),
        ]),
      ]),
      message: new FormControl('', [Validators.required]),
    });
  }
  processForm(data) {
    console.log(data);
    this.FormData.reset();
    this.showSent = true;
    this.spreadSheetUrl = 'https://api.apispreadsheets.com/data/9678/';
    var formData: any = new FormData();
    formData.append('Name', data.name);
    formData.append('Email', data.email);
    formData.append('Phone Number', data.phone);
    formData.append('Message', data.message);

    this.http.post(this.spreadSheetUrl, formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
