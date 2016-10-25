import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Sample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html'
})



export class Sample {

  name : string;


        constructor(public navCtrl: NavController) {


        }


    printmyname(){

      this.name = "kenneth";
      console.log("This is my name ", this.name);
    }

  

}
