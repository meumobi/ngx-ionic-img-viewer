import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'lib-ngx-ionic-img-viewer',
  templateUrl: './ngx-ionic-img-viewer.component.html',
  styleUrls: ['./ngx-ionic-img-viewer.component.scss']
})
export class NgxIonicImgViewerComponent implements OnInit, OnDestroy {
  imgSrc: string;
  sliderOptions = {
    zoom: true,
    passiveListeners: false
  };

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.imgSrc = this.navParams.get('imgSrc');
  }

  close() {
    this.modalController.dismiss();
  }

  ngOnDestroy() {
    console.log('a');
  }

}
