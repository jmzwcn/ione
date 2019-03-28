import { Component } from '@angular/core';

declare var Swiper;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {
    window.onload = function () {
      //initialize swiper when document ready
      var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        effect: 'cube',
        slidesPerView: 1,
        cubeEffect: { shadow: false, }
      })
    };
  }
}
