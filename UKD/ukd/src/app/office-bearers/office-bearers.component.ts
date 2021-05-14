import { Component, OnInit } from '@angular/core';
import list from './../../assets/office-bearer/list.json';
@Component({
  selector: 'app-office-bearers',
  templateUrl: './office-bearers.component.html',
  styleUrls: ['./office-bearers.component.css'],
})
export class OfficeBearersComponent implements OnInit {
  public bearer: { Name: string; Rank: string; PhoneNumber: string }[] = list;
  constructor() {}
  ngOnInit(): void {}
}
