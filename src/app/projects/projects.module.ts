import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../shared/ui/banner/banner.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectComponent } from './project/project.component';
import { CarouselCardComponent } from '../ui/carousel-card/carousel-card.component';
import { TextCardComponent } from '../ui/text-card/text-card.component';
import { VideoCardComponent } from '../ui/carousel-card/video-card/video-card.component';

@NgModule({
  declarations: [ProjectsPageComponent, ProjectComponent],
  imports: [
    CommonModule,
    BannerComponent,
    CarouselCardComponent,
    TextCardComponent,
    VideoCardComponent,
  ],
})
export class ProjectsModule {}
