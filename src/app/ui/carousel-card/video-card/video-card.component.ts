import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  DisplayCardConfig,
  VideoCardConfig,
} from 'src/app/projects/project/project.model';

@Component({
  selector: 'app-video-card',
  standalone: true,
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {
  @Input() config!: DisplayCardConfig;
  public videoConfig!: VideoCardConfig;

  public src: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoConfig = this.config as VideoCardConfig;
    if (this.videoConfig.src) {
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.videoConfig.src
      );
    }
  }
}
