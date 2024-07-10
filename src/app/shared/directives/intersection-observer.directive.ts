import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';

export interface IntersectionObserverValue {
  isIntersecting: boolean;
  elementRef: ElementRef;
}

@Directive({
  selector: '[intersectionObserver]',
})
export class IntersectionObserverDirective implements OnDestroy {
  private observer: IntersectionObserver;

  @Output() intersectionChange = new EventEmitter<IntersectionObserverValue>();

  constructor(private elementRef: ElementRef) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.intersectionChange.emit({
            isIntersecting: entry.isIntersecting,
            elementRef: this.elementRef,
          });
        });
      },
      {
        threshold: 0.5,
      }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
