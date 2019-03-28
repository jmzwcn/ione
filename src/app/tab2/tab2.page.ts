import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

declare var Swiper;

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;
  category = 'general';

  constructor(private http: HttpClient) {
    this.load()
  }

  load() {
    this.getData('top-headlines?country=us&category=' + this.category)
      .subscribe(data => {
        console.log(data);
        this.data = data;
        this.data.articles = this.data.articles.filter(article => article.content);
        //loading.dismiss();
      });
  }

  ionViewWillEnter() {
    // this.load();
  }

  ionViewDidEnter() {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      effect: 'cube',
      slidesPerView: 1,
      cubeEffect: {
        shadow: false,
        shadowOffset: 0,
        shadowScale: 1
      }
    })
  }

  getData(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
