import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingImageCarouselComponent } from './sliding-image-carousel.component';

describe('SlidingImageCarouselComponent', () => {
  let component: SlidingImageCarouselComponent;
  let fixture: ComponentFixture<SlidingImageCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidingImageCarouselComponent]
    });
    fixture = TestBed.createComponent(SlidingImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
