import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{PostEditPage} from '../pages/post-edit-page/post-edit-page';
import { XModule } from '../xmodule/modules/core';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    PostEditPage
  ],
  providers: []
})
export class AppModule {}
