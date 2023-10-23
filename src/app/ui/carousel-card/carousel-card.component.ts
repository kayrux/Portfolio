import { Component, Input } from '@angular/core';
import { CarouselConfig, CarouselItem } from './carousel.model';
import { CommonModule } from '@angular/common';
import { SharedAngularMaterialModule } from 'src/app/shared/shared-modules/shared-angular-material.module';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss'],
  imports: [CommonModule, SharedAngularMaterialModule],
})
export class CarouselCardComponent {
  @Input() config!: CarouselConfig;

  public selectedIndex = 0;
  public displayedItem!: CarouselItem;
  public disableLeftArrowKey = true;
  public disableRightArrowKey = false;

  ngOnInit() {
    this.displayedItem = this.config.items![0];
  }

  updateDisplayItem() {
    this.displayedItem = this.config.items![this.selectedIndex];
  }

  rightArrowClick() {
    if (this.selectedIndex < this.config.items!.length - 1) {
      this.selectedIndex++;
      if (this.selectedIndex === this.config.items!.length - 1) {
        this.disableRightArrowKey = true;
      }
    }
    this.disableLeftArrowKey = false;
    this.updateDisplayItem();
  }

  leftArrowClick() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      if (this.selectedIndex === 0) {
        this.disableLeftArrowKey = true;
      }
    }
    this.disableRightArrowKey = false;
    this.updateDisplayItem();
  }
}
