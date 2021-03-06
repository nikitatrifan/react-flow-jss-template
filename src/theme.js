export default {
  mainFont: 'Cerebri Sans, SF UI Display, Helvetica, Roboto, sans-serif',
  secondaryFont: 'Radnika, sans-serif',
  monoFont: 'Fira Code, monospace',

  textColor: '#121212',
  whiteColor: '#ffffff',
  lightGrayColor: '#FAFAFA',
  darkBackground: '#27292A',
  introBackground: '#17181a',

  smallMargin: '12px 0 8px 0',
  mediumMargin: '32px 0 14px 0',
  largeMargin: '72px 0 32px 0',

  primaryColor: '#5F5AF1',
  primaryLightColor: '#9893F9',

  mobilePoint: 600,
  tabletPoint: 1060,
  desktopPoint: 1200,

  logoName: 'trifan.io',
};

export type MarginType = 'small' | 'medium' | 'large';
export type StylesType = { [key: string]: Object } | number | false | null; // eslint-disable-line
