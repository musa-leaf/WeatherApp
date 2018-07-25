import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpenWeatherProvider } from '../../providers/open-weather/open-weather';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  weatherData : any ;
  city : string = "Pretoria";
  dateObj: number = Date.now();
  Math : any;
  

  constructor(public openWeather : OpenWeatherProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.retrieve();
    this.Math = Math;
  }

  doRefresh(refresher){
    this.retrieve();
    refresher.complete();
  }

  cityUpdate(){
    this.retrieve();
  }

  retrieve(){
    this.openWeather.updateWeather(this.city).subscribe(
      data =>{
        this.weatherData = data;
      }
    );
  }

}
