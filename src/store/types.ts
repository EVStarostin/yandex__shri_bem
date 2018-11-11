export interface Event {
  type: string;
  title: string;
  source: string;
  time: string;
  description: string | null;
  icon: string;
  size: string;
  data?: Data;
}

export interface Data {
  type?: string;
  values?: {
    electricity: Array<number | string>;
    water: Array<number | string>;
    gas: Array<number | string>;
  };
  buttons?: string[];
  image?: string;
  temperature?: number;
  humidity?: string;
  albumcover?: string;
  artist?: string;
  track?: {
    name: string;
    length: string;
  };
  volume?: number;
};

export interface StoreState {
  events: Event[];
  errors: Error[];
}
