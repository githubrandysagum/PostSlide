import { Component } from '@angular/core';
import {Xapi } from '../../xmodule/providers/xapi';
import * as xa from '../../xmodule/interfaces/xapi';



@Component({
  selector: 'post-list',
  templateUrl: 'post-list.html'
})


export class PostList {

  text: string;

  postlist : xa.PostQueryResponse;

    constructor(private xapi : Xapi) {
      let post : xa.PostQuery = <xa.PostQuery>{};
      post.category_name = 'student';
      console.log(post);
      this.xapi.get_posts(post,result =>  {
        this.postlist = result.data;
      },err=>{
        this.xapi.error(err);
      });

    }

}
