import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { SlidingImageCarouselComponent } from '../shared/ui/sliding-image-carousel/sliding-image-carousel.component';
import { IntersectionObserverDirective } from '../shared/directives/intersection-observer.directive';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SlidingImageCarouselComponent,
    IntersectionObserverDirective,
  ],
})
export class HomePageModule {}
