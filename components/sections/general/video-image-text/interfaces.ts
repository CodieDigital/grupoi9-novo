export interface VideoImageTextProps {
  video?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  youtubeLink?: string;
  youtubeTextButton?: string;
}

export interface IVideoImageText {
  data: VideoImageTextProps;
  noMask?: boolean;
  hasAspectRatio?: boolean;
}
