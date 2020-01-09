import { NgModule } from '@angular/core';
import { NgxIonicImgViewerComponent } from './ngx-ionic-img-viewer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NgxIonicImgViewerComponent],
  entryComponents: [NgxIonicImgViewerComponent],
  imports: [
    IonicModule
  ],
  exports: [NgxIonicImgViewerComponent]
})
export class NgxIonicImgViewerModule { }
