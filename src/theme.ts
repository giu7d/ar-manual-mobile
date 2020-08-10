interface ITheme {
  name: string;
  colors: {
    primary: string;
    secundary: string;
    text: string;
    background: string;
    foreground: string;
    info: string;
    success: string;
    warn: string;
    danger: string;
  };
  font: {
    size: number;
    family: string;
  };
  roundness: number;
  intensity: {
    dark: number;
    medium: number;
    light: number;
  };
  size: {
    small: number;
    medium: number;
    large: number;
  };
}

interface IThemeCustom {
  name?: string;
  colors?: {
    primary?: string;
    secundary?: string;
    text?: string;
    background?: string;
    foreground?: string;
    info?: string;
    success?: string;
    warn?: string;
    danger?: string;
  };
  font?: {
    size?: number;
    family?: string;
  };
  roundness?: number;
  intensity?: {
    dark?: number;
    medium?: number;
    light?: number;
  };
  size?: {
    small?: number;
    medium?: number;
    large?: number;
  };
}

const Theme: ITheme = {
  name: "default",
  colors: {
    primary: "#0070F3",
    secundary: "#7828C8",
    text: "#000000",
    background: "#F5F5F5",
    foreground: "#FFFFFF",
    info: "#FC0080",
    success: "#79FCE0",
    warn: "#F4A623",
    danger: "#FB5555",
  },
  intensity: {
    dark: 1,
    medium: 0.75,
    light: 0.5,
  },
  size: {
    small: 1,
    medium: 1.5,
    large: 2,
  },
  font: {
    size: 14,
    family: `"OpenSans-Regular", Helvetica, sans-serif`,
  },
  roundness: 8,
};

export { Theme, ITheme, IThemeCustom };
