import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css'],
})
export class JoinUsComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  aadhar: string;
  pancard: string;
  district: string;
  state: string;
  contributeVoluntary: string;
  FormData: FormGroup;
  spreadSheetUrl: string;
  phonepattern = '^((\\+91-?)|0)?[0-9]{10}$';
  aadharPattern = '[0-9]{12}$';
  displayForm = false;
  upload = false;
  displayContributeVoluntary = true;

  contributeVoluntaryCheckbox: boolean = true;

  //sending formgroup userdata to htmlcomponent
  get fullName() {
    return this.FormData.get('name');
  }
  get eMail() {
    return this.FormData.get('email');
  }
  get phoneNo() {
    return this.FormData.get('phone');
  }
  get add1() {
    return this.FormData.get('address1');
  }
  get add2() {
    return this.FormData.get('address2');
  }
  get aadharNo() {
    return this.FormData.get('aadhar');
  }
  get panNo() {
    return this.FormData.get('pan');
  }
  get districtFunc() {
    return this.FormData.get('district');
  }
  get stateFunc() {
    return this.FormData.get('state');
  }
  get getIdProof() {
    return this.FormData.get('idProof');
  }
  get getPhoto() {
    return this.FormData.get('photo');
  }
  constructor(private builder: FormBuilder) {
    this.displayContributeVoluntary = true;
    this.contributeVoluntaryCheckbox = true;
  }
  //checking voluntary contribution checkbox

  onVoluntaryChange(e) {
    if (e.target.checked) {
      this.displayContributeVoluntary = true;
      this.contributeVoluntaryCheckbox = true;
    } else {
      this.displayContributeVoluntary = false;
      this.contributeVoluntaryCheckbox = false;
    }
  }

  ngOnInit(): void {
    this.displayContributeVoluntary = true;
    this.contributeVoluntaryCheckbox = true;
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      phone: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.pattern(this.phonepattern),
        ]),
      ]),
      address1: new FormControl('', [Validators.required]),
      address2: new FormControl(''),
      aadhar: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.pattern(this.aadharPattern),
        ]),
      ]),
      pan: new FormControl(''),
      district: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    });
  }

  registerUs() {
    this.displayForm = true;
  }
  uploadDoc() {
    this.upload = true;
  }
  processForm(data) {
    console.log(data);
    this.FormData.reset();
  }
}
