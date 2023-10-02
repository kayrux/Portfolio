import { CarouselConfig } from 'src/app/ui/carousel-card/carousel.model';
import { VideoCardConfig } from 'src/app/ui/carousel-card/video-card/video.model';
import { TextCardConfig } from 'src/app/ui/text-card/text-card.model';

export interface ProjectJSON {
  projects: Project[];
}
export interface Project {
  title: string;
  id: string;
  description: string;
  imageSrc: string;
  displayCards: DisplayCard[];
}

export interface DisplayCard {
  type: DisplayCardType;
  config: DisplayTypeConfig;
}

export type DisplayCardType = 'carousel' | 'text' | 'video';
export type DisplayTypeConfig =
  | CarouselConfig
  | TextCardConfig
  | VideoCardConfig;
