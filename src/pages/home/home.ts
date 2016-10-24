import { Component } from '@angular/core';
 import * as xi from "../../xmodule/interfaces/xapi"
 import {Xapi} from "../../xmodule/providers/xapi"
import { NavController } from 'ionic-angular';
import { PostForm } from '../post-form/post-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(private navCtrl: NavController, private xapi :Xapi) {
    xapi.serverUrl = 'http://work.org/wordpress/index.php';
  }
    

   goToPostForm(){
     this.navCtrl.push(PostForm)

   }

   


  

}