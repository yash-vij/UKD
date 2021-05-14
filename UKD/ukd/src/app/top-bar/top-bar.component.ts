import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  
  navigateHome() { this.router.navigate(['']); }
  navigateVolunteer() { this.router.navigate(['volunteer']); }
  navigateJoin() { this.router.navigate(['joinUkd']); }
  navigateDonateSection() { this.router.navigate(['donate']); }

}
