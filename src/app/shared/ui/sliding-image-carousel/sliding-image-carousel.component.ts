import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SharedAngularMaterialModule } from '../../shared-modules/shared-angular-material.module';
import { SharedCommon } from '../../shared-modules/shared-common.module';
import { fromEvent, Subscription, throttleTime } from 'rxjs';
interface MouseEventCallbacks {
  onMouseDown?: (event: MouseEvent) => void;
  onMouseUp?: (event: MouseEvent) => void;
  onMouseMove?: (event: MouseEvent) => void;
}
@Component({
  selector: 'app-sliding-image-carousel',
  templateUrl: './sliding-image-carousel.component.html',
  styleUrls: ['./sliding-image-carousel.component.scss'],
  imports: [SharedAngularMaterialModule, SharedCommon],
  standalone: true,
})
export class SlidingImageCarouselComponent implements AfterViewInit {
  @ViewChild('imageTrack', { static: false }) imageTrackRef!: ElementRef;

  @Input() imageUrls: string[] = [
    '../../../../assets/images/wendell-1.jpg',
    '../../../../assets/images/wendell-2.jpg',
    '../../../../assets/images/wendell-3.jpg',
    '../../../../assets/images/wendell-4.jpg',
  ];

  private mouseDownListener: any;
  private mouseUpListener: any;
  private mouseMoveSubscription!: Subscription;

  private imageTrackElement!: Element;
  private mouseDownAt = 0;
  private prevPercentage = 0;
  private currentPercentage = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  onMouseDown(event: MouseEvent) {
    this.mouseDownAt = event.clientX;
  }

  onMouseUp(event: MouseEvent) {
    this.mouseDownAt = 0;
    this.prevPercentage = this.currentPercentage;
  }

  onMouseMove(event: MouseEvent) {
    if (this.mouseDownAt === 0) return;
    const mouseDelta = this.mouseDownAt - event.clientX;
    const maxDelta = window.innerWidth;
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = this.prevPercentage + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -50
    );

    this.currentPercentage = nextPercentage;

    this.imageTrackElement.animate(
      {
        transform: `translate(${nextPercentage + 10}%, 0%)`,
      },
      { duration: 1200, fill: 'forwards' }
    );

    const images = this.imageTrackElement.getElementsByClassName('image');

    for (let image of Array.from(images)) {
      (image as Element).animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: 'forwards' }
      );
    }
  }
  ngAfterViewInit(): void {
    this.imageTrackElement = this.imageTrackRef.nativeElement;
    this.setMouseListeners(this.renderer, {
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      onMouseMove: this.onMouseMove,
    });
  }

  setMouseListeners(
    renderer: Renderer2,
    { onMouseDown, onMouseUp, onMouseMove }: MouseEventCallbacks
  ) {
    if (onMouseDown) {
      this.mouseDownListener = renderer.listen(
        'window',
        'mousedown',
        onMouseDown.bind(this)
      );
    }

    if (onMouseUp) {
      this.mouseUpListener = renderer.listen(
        'window',
        'mouseup',
        onMouseUp.bind(this)
      );
    }

    if (onMouseMove) {
      // Throttle mouse move events to execute at most once every 100ms
      this.mouseMoveSubscription = fromEvent<MouseEvent>(window, 'mousemove')
        .pipe(
          throttleTime(50) // Adjust throttle time as needed (e.g., 100ms)
        )
        .subscribe((event: MouseEvent) => {
          onMouseMove.call(this, event);
        });
    }
  }

  ngOnDestroy() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
    }
    if (this.mouseUpListener) {
      this.mouseUpListener();
    }

    this.mouseMoveSubscription.unsubscribe();
  }
}
