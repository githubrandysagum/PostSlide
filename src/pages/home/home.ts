import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {PostEditPage} from '../post-edit-page/post-edit-page';
import { Xapi } from '../../xmodule/providers/xapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private x: Xapi
  ) {
    x.serverUrl = "http://work.org/wordpress/index.php";

  }


  onclickAddPost(){
    this.navCtrl.push(PostEditPage);
  }
}
