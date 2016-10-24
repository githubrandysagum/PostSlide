import { Component } from '@angular/core';
import { Xapi} from '../../xmodule/providers/xapi';
import * as xa from '../../xmodule/interfaces/xapi';
import {NavController} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {IPost } from '../../interfaces/gallery';
/*
  Generated class for the UserEdit component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/





@Component({
  selector: 'post-edit',
  templateUrl: 'post-edit.html'
})



export class PostEdit {
 post  : IPost = <IPost>{}

  constructor(private navCtrl : NavController, private xapi : Xapi) {}
   
   
   onSubmit(){
     this.post.category = 'student';
     this.xapi.post_insert(this.post,result=>{
        if (result.success){
          this.post = <IPost>{};  
          this.navCtrl.setRoot(HomePage);
        }
     },
     error=>{
       this.xapi.error(error);
     });

   }

}
