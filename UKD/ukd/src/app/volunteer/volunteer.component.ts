import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})
export class VolunteerComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  phone: string;
  FormData: FormGroup;
  SubscribeForm: FormGroup;
  spreadSheetUrl: string;
  phonepattern = '^((\\+91-?)|0)?[0-9]{10}$';
  showSent = false;
  constructor(
    private builder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  navigateJoin() {
    this.router.navigate(['joinUkd']);
  }
  navigateDonateSection() {
    this.router.navigate(['donate']);
  }
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
    this.SubscribeForm = this.builder.group({
      emailsubscribe: new FormControl('', [Validators.required]),
    });
  }

  processForm(data) {
    console.log(data);
  }
  processSubscribeFrom(data) {
    console.log(data);
  }
}
