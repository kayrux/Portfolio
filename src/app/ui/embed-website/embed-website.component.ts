import { Component, Input } from '@angular/core';
import {
  DisplayCardConfig,
  EmbedWebsiteConfig,
} from 'src/app/projects/project/project.model';
import { SafePipe } from 'src/app/shared/pipes/safe-pipe';
import { SharedAngularMaterialModule } from 'src/app/shared/shared-modules/shared-angular-material.module';

@Component({
  selector: 'app-embed-website',
  templateUrl: './embed-website.component.html',
  styleUrls: ['./embed-website.component.scss'],
  standalone: true,
  imports: [SafePipe, SharedAngularMaterialModule],
})
export class EmbedWebsiteComponent {
  @Input() config!: DisplayCardConfig;
  public embedWebsiteConfig!: EmbedWebsiteConfig;

  ngOnInit() {
    this.embedWebsiteConfig = this.config as EmbedWebsiteConfig;
  }
}
