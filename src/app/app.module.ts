import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PostList} from '../components/post-list/post-list';
import { XModule } from '../xmodule/modules/core';
import {PostEdit} from '../components/post-edit/post-edit';
import {PostForm} from '../pages/post-form/post-form';
import {PostEditPage} from '../pages/post-edit/post-edit'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostList,
    PostEdit,
    PostForm,
    PostEditPage
  ],
  imports: [
    XModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostList,
    PostEdit,
    PostForm,
     PostEditPage
  ],
  providers: []
})
export class AppModule {}
