import { Component } from '@angular/core';
 import * as xi from "../../xmodule/interfaces/xapi"
 import {Xapi} from "../../xmodule/providers/xapi"
import { NavController } from 'ionic-angular';
import { PostForm } from '../post-form/post-form';
import {PostEditPage} from '../post-edit/post-edit';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(private navCtrl: NavController, private xapi :Xapi) {
    xapi.serverUrl = 'http://work.org/wordpress/index.php';
  }
    

   onclickAddPost(){
     this.navCtrl.push(PostForm)

   }

   

}
