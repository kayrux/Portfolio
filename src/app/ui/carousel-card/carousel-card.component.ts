import { Component, Input } from '@angular/core';
import { CarouselConfig, CarouselItem } from './carousel.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss'],
  imports: [CommonModule],
})
export class CarouselCardComponent {
  @Input() config!: CarouselConfig;

  public selectedIndex = 0;
  public displayedItem!: CarouselItem;

  ngOnInit() {
    this.displayedItem = this.config.items![0];
  }

  updateDisplayItem() {
    this.displayedItem = this.config.items![this.selectedIndex];
  }

  rightArrowClick() {
    if (this.selectedIndex < this.config.items!.length - 1) {
      this.selectedIndex++;
    }
    this.updateDisplayItem();
  }

  leftArrowClick() {
    console.log('click');
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
    this.updateDisplayItem();
  }
}
