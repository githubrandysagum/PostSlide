import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the StudentForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-form',
  templateUrl: 'post-form.html'
})


export class PostForm {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StudentForm Page');
  }

}
