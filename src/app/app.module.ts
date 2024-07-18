import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedAngularMaterialModule } from './shared/shared-modules/shared-angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsModule } from './projects/projects.module';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './shared/ui/banner/banner.component';
import { CarouselCardComponent } from './ui/carousel-card/carousel-card.component';
import { TextCardComponent } from './ui/text-card/text-card.component';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ProjectsModule,
    HomePageModule,
    BrowserModule,
    AppRoutingModule,
    SharedAngularMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    BannerComponent,
    CarouselCardComponent,
    TextCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
