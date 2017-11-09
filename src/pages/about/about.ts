import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  navPage:any = MapPage;
  params:any = {};
  constructor(public navCtrl: NavController) {

    
  }
  toMap(){
    
  }
}
