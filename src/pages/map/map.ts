import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapOptions,Point,MarkerOptions } from 'angular2-baidu-map';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  options: MapOptions;
  markers: Array<{ point: Point; options?: MarkerOptions }>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.options = {
      centerAndZoom: {
        lat: 27.552416,
        lng: 109.971927,
        zoom: 16
      },
      enableKeyboard: true,
      enableScrollWheelZoom: true
    };
    this.markers = [
      {
        options: {
          icon:{
            imageUrl: '/assets/img/coffee.png',
            size: {
              height: 30,
              width: 30
            }
          }
        },
        point: {
          lat: 27.552416,
          lng: 109.971927
        }
      },
      {point: {
        lat: 27.552416,
        lng: 109.971927
      }
      }
    ]
  }
  public showWindow({ e, marker, map }: any): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow('地址：怀化某处', {
        offset: new window.BMap.Size(0, -30),
        title: 'mandi'
      }),
      marker.getPosition()
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
