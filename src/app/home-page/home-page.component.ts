import { IntersectionObserverValue } from './../shared/directives/intersection-observer.directive';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  public observer!: IntersectionObserver;
  @ViewChildren('section') sections!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit() {}

  onMouseDown(event: Event) {
    console.log(event);
  }

  ngAfterViewInit() {}

  onIntersect(intersectionObserverValue: IntersectionObserverValue) {
    if (intersectionObserverValue.isIntersecting) {
      intersectionObserverValue.elementRef.nativeElement.classList.add('show');
      // Perform actions like lazy loading content, etc.
    } else {
      intersectionObserverValue.elementRef.nativeElement.classList.remove(
        'show'
      );
      // Optionally handle when the element is out of view
    }
  }
}
