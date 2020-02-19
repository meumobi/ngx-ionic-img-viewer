import { Directive, HostListener, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgxIonicImgViewerComponent } from './ngx-ionic-img-viewer.component';

@Directive({
  selector: '[libNgxIonicImgViewer]'
})
export class NgxIonicImgViewerDirective {
  constructor(
    public modalController: ModalController
  ) {}

  @Input('libNgxIonicImgViewer') imgSrc: string;
  @HostListener('click') onClick() {
    this.openPreview(this.imgSrc);
  }

  async openPreview(imgSrc: string) {
    const modal = await this.modalController.create({
      component: NgxIonicImgViewerComponent,
      componentProps: {
        imgSrc
      }
    });
    return await modal.present();
  }
}