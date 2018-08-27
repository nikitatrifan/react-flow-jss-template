import theme from '../theme';

type PointType = string | number | null;
type ResponsiveType = {
  isMobile: boolean,
  isDesktop: boolean,
  isTablet: boolean,
};

export default function responsive(point: PointType): string | ResponsiveType {
  if (point) {
    // it is useful for react-jss.
    // you can simply add to a device name _min suffix
    // for example mobile_min to generate media query with
    // min with starting point.
    if (point.indexOf('min') !== -1) {
      const parsedPoint = point.replace('_min', '');
      const device = theme[`${parsedPoint}Point`];

      return `@media only screen and (min-width: ${device}px)`;
    }

    const device = theme[`${point}Point`];
    return `@media only screen and (max-width: ${device}px)`;
  }

  const width = parseInt(window.innerWidth, 10);
  const isMobile = width <= theme.mobilePoint;
  const isTablet = width <= theme.tabletPoint;

  return {
    isMobile,
    isTablet: !isMobile && isTablet,
    isDesktop: !isMobile && !isTablet,
  };
}
