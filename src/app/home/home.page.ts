import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgSrc = `https://imageflow.meumobi.com/firebase/F5sf?width=200&height=200&mode=crop&scale=both`;
  hiResImgSrc = `https://imageflow.meumobi.com/firebase/F5sf?width=500&height=500&mode=crop&scale=both`;

  constructor() {}
}
