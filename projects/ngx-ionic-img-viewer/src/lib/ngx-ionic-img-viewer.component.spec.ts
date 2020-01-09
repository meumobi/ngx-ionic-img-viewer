import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIonicImgViewerComponent } from './ngx-ionic-img-viewer.component';

describe('NgxIonicImgViewerComponent', () => {
  let component: NgxIonicImgViewerComponent;
  let fixture: ComponentFixture<NgxIonicImgViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIonicImgViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIonicImgViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
