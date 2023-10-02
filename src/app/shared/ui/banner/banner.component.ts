import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [CommonModule],
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() backgroundColour: string = 'purple';
}
