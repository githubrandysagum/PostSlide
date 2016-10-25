import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { PostEditService } from '../../xmodule/providers/post-edit-service';
import {IPost} from '../../interfaces/IPost';
import{PostListPage} from '../post-list-page/post-list-page';


@Component({
  selector: 'page-post-edit',
  templateUrl: 'post-edit-page.html'
})
export class PostEditPage {

  title : "";
  content: "";
  post_ID: number;
  urlPhoto: string = "x-assets/img/anonymous.gif";
  photoId: number = 0;


  constructor(public navCtrl: NavController,
     private postEditService: PostEditService,
     private navParams: NavParams,
     private events: Events

  ) {
    events.subscribe('file-upload-success', x => this.onSuccessFileUpload(x[0]));
    this.post_ID = navParams.get('post_ID');
      if ( this.post_ID ) {
        postEditService.load( this.post_ID, p => {
          console.log(p);
          this.title = p.post_title;
          this.content = p.post_content;       
          if ( p.images ) {
            this.urlPhoto = p.images[Object.keys( p.images ).pop()];
          }
        });
      }
  }


  onClickPost() {
   
   
    let post = {
      ID: this.post_ID,   
      category: 'housemaid', 
      fid: [ this.photoId ],
      post_title : this.title,
      post_content: this.content,
      password : 234234
    };

  //  this.loader = true;
    this.postEditService.submit( post, res => {
    //  this.loader = false;
      console.log("onClickPost::callback(), ", res );
      this.navCtrl.setRoot(PostListPage);
    }, err => {
    //  this.loader = false;
      console.log("err");
    });
  }

  onChangeFileBrowser( $event ) {
      this.postEditService.upload( $event.target.files );
  }

  // Displays image.
  // This method is called on file-upload-success event.
  private onSuccessFileUpload( file ) {
    console.log(file);
    this.photoId = file.id;
    this.urlPhoto = file.url ;
  }
}
