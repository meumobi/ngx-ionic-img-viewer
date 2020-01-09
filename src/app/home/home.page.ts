import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgxIonicImgViewerComponent } from 'ngx-ionic-img-viewer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgSrc = `https://imageflow.meumobi.com/firebase/F5sf?width=200&height=200&mode=crop&scale=both`;
  hiResImgSrc = `https://imageflow.meumobi.com/firebase/F5sf?width=500&height=500&mode=crop&scale=both`;

  constructor(
    private modalController: ModalController
  ) { }

  async openPreview(imgSrc) {
    const modal = await this.modalController.create({
      component: NgxIonicImgViewerComponent,
      componentProps: {
        imgSrc
      }
    });
    return await modal.present();
  }

}
