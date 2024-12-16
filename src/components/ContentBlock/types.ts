import { TFunction } from "react-i18next";

interface CarouselProps {
  images: string[];
  autoplay?: boolean;
  delay?: number;
  navigation?: boolean;
  pagination?: boolean;
  navigationStyle?: {
    width: string;
    height: string;
    color: string;
  };
}

export interface ContentBlockProps {
  icon?: string;
  img?: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  images?: string[];
  direction: "left" | "right";
  carousel?: CarouselProps;
}
