import { Component } from '@angular/core';
import { Xapi} from '../../xmodule/providers/xapi';
import * as xa from '../../xmodule/interfaces/xapi';
import {HomePage} from '../../pages/home/home';
import {IPost } from '../../interfaces/gallery';
import { NavController, NavParams, Events } from 'ionic-angular';
import { PostEditService } from '../../xmodule/providers/post-edit-service';

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

 
 
 post  : IPost = <IPost>{};


 password: string = '';
  post_title: string = '';
  post_content: string = '';
  gender: 'M' | 'F' | '' = '';
  mobile: string = '';
  loader: boolean = false;
  post_ID: number;
  urlPhoto: string = "x-assets/img/anonymous.gif";
  photoId: number = 0;


  constructor(private navCtrl : NavController, 
  private xapi : Xapi, 
   private postEditService: PostEditService,
     private navParams: NavParams,
     private events: Events) {

            events.subscribe('file-upload-success', x => this.onSuccessFileUpload(x[0])); 
            this.post.post_ID = navParams.get('post_ID');     
     }
   
    private onSuccessFileUpload( file ) {
    console.log(file);
    this.photoId = file.id;
    this.urlPhoto = file.url ;
  }

  onChangeFileBrowser( $event ) {
      this.postEditService.upload( $event.target.files );
  }

onClickPost() {
   
   
    
    this.loader = true;
    this.postEditService.submit( this.post, res => {
    //  this.loader = false;
      console.log("onClickPost::callback(), ", res );
      this.navCtrl.setRoot(HomePage);
    }, err => {
    //  this.loader = false;
      console.log("err");
    });
}

        
       
}
