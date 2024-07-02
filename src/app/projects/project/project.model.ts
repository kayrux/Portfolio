export interface ProjectJSON {
  projects: Project[];
}
export interface Project {
  title: string;
  bannerBackgroundColour?: string;
  id: string;
  description: string;
  imageSrc: string;
  displayCardsConfig: DisplayCardConfig[];
}

export type DisplayCardConfig =
  | EmbedWebsiteConfig
  | VideoCardConfig
  | TextCardConfig
  | CarouselConfig;

export enum DisplayCardType {
  carousel,
  text,
  video,
  embeddedWebsite,
}

export type EmbedWebsiteConfig = {
  type: DisplayCardType.embeddedWebsite;
  url: string;
  title?: string;
};

export type VideoCardConfig = {
  type: DisplayCardType.video;
  title: string;
  src: string;
};
export type TextCardConfig = {
  type: DisplayCardType.text;
  title: string;
  innerHtml: string;
};

export type CarouselConfig = {
  type: DisplayCardType.carousel;
  title: string;
  items: CarouselItem[];
};
export interface CarouselItem {
  imageSrc: string;
  description: string;
}

export type DisplayTypeConfig =
  | CarouselConfig
  | TextCardConfig
  | VideoCardConfig;
