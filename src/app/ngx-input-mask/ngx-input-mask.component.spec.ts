import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputMaskComponent } from './ngx-input-mask.component';

describe('NgxInputMaskComponent', () => {
  let component: NgxInputMaskComponent;
  let fixture: ComponentFixture<NgxInputMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInputMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
