import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css'],
})
export class LeadersComponent implements OnInit {
  constructor() {}

  leadersNames = [
    'Kashi Singh Airy',
    'Diwakar Bhatt',
    'B.D.Raturi',
    'Dr. Narayan Singh Jantwal',
    'Trivendra Singh Panwar',
    'Pushpesh Tripathi',
    'Er. Harish Chandra Pathak',
    'Anand Prakash Jayal',
  ];
  leadersImage = [1, 2, 3, 4, 5, 6, 7, 8];

  ngOnInit(): void {}
}
