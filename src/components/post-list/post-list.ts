import { Component } from '@angular/core';
import {Xapi } from '../../xmodule/providers/xapi';
import * as xa from '../../xmodule/interfaces/xapi';



@Component({
  selector: 'post-list',
  templateUrl: 'post-list.html'
})


export class PostList {

  text: string;
 page: number = 1;
  posts = [];

  postlist : xa.PostQueryResponse;

    constructor(private xapi : Xapi) {
       
         // this.listpost();
        this.loadPosts();
    }

//This is an old application of xapi
listpost(){

  let post : xa.PostQuery = <xa.PostQuery>{};
          
            post.category_name = 'PostSlide';   
          
            this.xapi.get_posts(post,result =>  {
            
              this.postlist = result.data;
            
            },err=>{
            
              this.xapi.error(err);
            
            });

}

 displayPosts( data ) {
    console.log( 'success', data );
    for ( let post of data ) {
   //   if ( post.images ) {
    //    post.image = post.images[ Object.keys( post.images ).pop() ];
   //     delete post.images;
   //   }
      this.posts.push( post );
    }
  }

loadPosts( finished? ) {
    let arg : xa.PostQuery = xa.postQuery; 
      
        arg.paged = this.page ++;
      //  arg.per_page = 15;
        this.xapi.get_posts( arg, (res: xa.PostQueryResponse) => {
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
            if ( finished ) finished();
        },
        e => {
            if ( finished ) finished();
        } );
  }



}
