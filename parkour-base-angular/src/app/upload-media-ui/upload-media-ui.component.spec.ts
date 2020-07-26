import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMediaUiComponent } from './upload-media-ui.component';

describe('UploadMediaUiComponent', () => {
  let component: UploadMediaUiComponent;
  let fixture: ComponentFixture<UploadMediaUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMediaUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMediaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
