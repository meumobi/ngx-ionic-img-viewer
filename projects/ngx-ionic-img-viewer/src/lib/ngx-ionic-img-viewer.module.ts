import { NgModule } from '@angular/core';
import { NgxIonicImgViewerComponent } from './ngx-ionic-img-viewer.component';
import { IonicModule } from '@ionic/angular';
import { NgxIonicImgViewerDirective } from './ngx-ionic-img-viewer.directive';

@NgModule({
  declarations: [NgxIonicImgViewerComponent, NgxIonicImgViewerDirective],
  entryComponents: [NgxIonicImgViewerComponent],
  imports: [
    IonicModule
  ],
  exports: [NgxIonicImgViewerComponent, NgxIonicImgViewerDirective]
})
export class NgxIonicImgViewerModule { }
