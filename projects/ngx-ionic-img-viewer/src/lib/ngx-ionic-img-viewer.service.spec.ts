import { TestBed } from '@angular/core/testing';

import { NgxIonicImgViewerService } from './ngx-ionic-img-viewer.service';

describe('NgxIonicImgViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxIonicImgViewerService = TestBed.get(NgxIonicImgViewerService);
    expect(service).toBeTruthy();
  });
});
