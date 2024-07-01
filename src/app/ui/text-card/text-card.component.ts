import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  DisplayCardConfig,
  TextCardConfig,
} from 'src/app/projects/project/project.model';

@Component({
  selector: 'app-text-card',
  standalone: true,
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss'],
  imports: [CommonModule],
})
export class TextCardComponent {
  @Input() config!: DisplayCardConfig;
  public textCardConfig!: TextCardConfig;

  ngOnInit() {
    this.textCardConfig = this.config as TextCardConfig;
    console.log('text card config: ' + this.textCardConfig);
  }
}
