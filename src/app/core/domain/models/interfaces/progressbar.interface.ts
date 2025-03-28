export interface IProgressBar {
  default: IStylesProgress;
  weak: IStylesProgress;
  medium: IStylesProgress;
  strong: IStylesProgress;
}

export interface IStylesProgress {
  width: number;
  className: string;
}

export interface IProgress_Key {
  default: string;
  weak: string;
  medium: string;
  strong: string;
}
