import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextCardConfig } from './text-card.model';

@Component({
  selector: 'app-text-card',
  standalone: true,
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss'],
  imports: [CommonModule],
})
export class TextCardComponent {
  @Input() config!: TextCardConfig;
}
