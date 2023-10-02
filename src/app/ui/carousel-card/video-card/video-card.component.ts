import { Component, Input } from '@angular/core';
import { VideoCardConfig } from './video.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-card',
  standalone: true,
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {
  @Input() config!: VideoCardConfig;

  public src: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.config.src) {
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.src);
    }
  }
}
