import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbNailComponent } from './thumb-nail.component';

describe('ThumbNailComponent', () => {
  let component: ThumbNailComponent;
  let fixture: ComponentFixture<ThumbNailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbNailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbNailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
