import { IntersectionObserverValue } from './../shared/directives/intersection-observer.directive';
import {
  AfterViewInit,
  Component,
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
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.observer = new IntersectionObserver((entries, observer) => {
    //   console.log('etries', entries);
    //   observer.
    // });
  }

  ngAfterViewInit() {
    // console.log('sections', this.sections);
    // this.sections.forEach((section) => {
    //   console.log(section.nativeElement); // or perform other actions
    // });
    // const sections = this.el.nativeElement.querySelectorAll('.section');
    // sections.forEach((section: Element) => {
    //   console.log(section); // or perform other actions
    //   // For example, you can change the background color of each section
    // });
    // sections.forEach((section: Element) => {
    //   this.observer.observe(section);
    // });
  }

  onIntersect(intersectionObserverValue: IntersectionObserverValue) {
    if (intersectionObserverValue.isIntersecting) {
      console.log('Element is now intersecting with the viewport!');
      console.log(intersectionObserverValue.elementRef);
      intersectionObserverValue.elementRef.nativeElement.classList.add('show');
      // Perform actions like lazy loading content, etc.
    } else {
      console.log('Element is no longer intersecting with the viewport.');
      intersectionObserverValue.elementRef.nativeElement.classList.remove(
        'show'
      );
      // Optionally handle when the element is out of view
    }
  }
}
