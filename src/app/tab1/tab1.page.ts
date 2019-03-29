import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var AMap;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('map_container') map_container: ElementRef;
  map: any; // 地图对象

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.map = new AMap.Map(this.map_container.nativeElement, {
      //resizeEnable: true,
      //rotateEnable: true,
      //pitchEnable: true,
      zoom: 11,
      //pitch: 80,
      //rotation: -15,
      viewMode: '2D',//开启3D视图,默认为关闭
      buildingAnimation: true,//楼块出现是否带动画
      showBuildingBlock: true,
      expandZoomRange: true,
      //zooms: [3, 20],
      //center: [116.333926, 39.997245]
      mapStyle: 'amap://styles/macaron',
    });

    AMap.plugin('AMap.ToolBar', () => {
      this.map.addControl(new AMap.ToolBar({
        liteStyle: true,
        offset: new AMap.Pixel(0, 200),
        locate: false,
        autoPosition: true,
      }))
    });
  }
}
