export interface Art {
  id: number;
  title: string;
  thumb: string;
  url?: string;
}

export interface Project {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  arts: Art[];
}

export interface AppContextData {
  theme: boolean;
  handleToggleTheme: () => void;
}
