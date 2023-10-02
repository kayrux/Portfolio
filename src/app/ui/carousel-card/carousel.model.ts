export interface CarouselConfig {
  title: string;
  items?: CarouselItem[];
}

export interface CarouselItem {
  imageSrc: string;
  description: string;
}
