import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Xapi } from "../../xmodule/providers/xapi";
import * as xi from "../../xmodule/interfaces/xapi";
import { PostEditPage } from "../post-edit-page/post-edit-page";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list-page.html'
})
export class PostListPage {
    
    
  @ViewChild('mySlider') slider: Slides;

  slug: string;
  page: number = 1;
  posts = [];
  constructor(
      public navCtrl: NavController,
      private navParams: NavParams,
      private x: Xapi
  ) {
    console.log( 'PostListPage::constructor()', navParams.data);
    this.slug = this.navParams.get( 'slug' );


    this.loadPosts();
  }

  onSlideChanged() {

    console.log("The app is sliding");
    if( this.slider.isEnd()){
       console.log("last slide");
        this.loadPosts();
    }
  }

  loadPosts() {
    let arg : xi.PostQuery = xi.postQuery;
        arg.category_name = this.slug;
        arg.paged = this.page ++;
        arg.per_page = 3;
        this.x.get_posts( arg, (res: xi.PostQueryResponse) => {
            if ( res.success ) {
                if ( res.data && res.data.length ) {
                    this.displayPosts( res.data );
                }
                else {
                    console.log('No more posts');
                }
            }
            else {
                if ( res.data ) alert( res.data );
                else alert("Error on post list");
            }
            //if ( finished ) finished();
        },
        e => {
           // if ( finished ) finished();
        } );
  }

  displayPosts( data ) {
    console.log( 'success', data );
    for ( let post of data ) {
      if ( post.images ) {
        post.image = post.images[ Object.keys( post.images ).pop() ];
        delete post.images;
      }
      this.posts.push( post );
    }
  }


  onclickDelete(ID : any, index: number){
        let arg = {
          post_ID : ID,
          password : 234234
        };
    this.x.delete_post( arg, (res: xi.PostQueryResponse) => {
            if ( res.success ) {
                if ( res.data && res.data.length ) {
                   console.log(res.data);
                   delete this.posts[ID];
                  this.posts.splice(index,1);
                }
                else {
                    console.log('No more posts');
                }
            }
            else {
                if ( res.data ) alert( res.data );
                else alert("Error on post delete");
            }
           
        },
        e => {
          console.log("Error: Couldn't delete post");
        } );

  }


  onClickEdit( post_ID ) {
    this.navCtrl.push( PostEditPage, { post_ID: post_ID });
  }
  
  onclickAddPost(){
     this.navCtrl.push(PostEditPage);
  }

}
