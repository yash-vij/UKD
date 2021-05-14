import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-middle-bar',
  templateUrl: './middle-bar.component.html',
  styleUrls: ['./middle-bar.component.css'],
})
export class MiddleBarComponent implements OnInit {
  images2 = [
    { path: './assets/president/1.jpg' },
    { path: './assets/president/a.jpg' },
    { path: './assets/president/3.jpg' },
    { path: './assets/president/8.jpg' },
    { path: './assets/president/5.jpg' },
    { path: './assets/president/4.jpg' },
    { path: './assets/president/6.jpg' },
    { path: './assets/president/2.jpg' },
  ];
  ngOnInit(): void {}

  constructor(public router: Router) {}

  navigateVolunteer() {
    this.router.navigate(['volunteer']);
  }
  navigateJoin() {
    this.router.navigate(['joinUkd']);
  }
  navigateDonateSection() {
    this.router.navigate(['donate']);
  }
  clickedImg(imgtype) {
    console.log(imgtype);
  }
  images = [1, 2, 3, 4, 5, 6, 7].map((n) => `./assets/homecarousel/${n}.jpg`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
