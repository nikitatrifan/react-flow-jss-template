/**
 * Paragraph is a component with an app Paragraph typography settings.
 * It needs to stick to the same Paragraph style everywhere in the app.
 */
import React from 'react';
import classNames from 'classnames';
import injectStyles from 'react-jss';
import type { Classes } from 'react-jss';
import theme from '../theme';
import type { MarginType, StylesType } from '../theme';
import responsive from '../helpers/responsive';

type Props = {
  className: string,
  children: React.Children,
  size: string | number,
  weight: string | number,
  margin: MarginType,
  color: string,
  style: StylesType,
  classes: Classes,
  upperCase: boolean,
  font: string,
  opacity: boolean,
};

function Paragraph(__props: Props): React.Node {
  const {
    size = 2,
    classes,
    color,
    style = {},
    weight,
    margin,
    upperCase,
    font,
    center,
    tag,
    className,
    children,
    opacity,
    ...props
  } = __props;

  const componentClassName = classNames(
    classes.wrapper,
    classes[`size_${size}`],
    upperCase && classes.upperCase,
    opacity && classes.opacity,
    className,
  );

  const marginStyle = margin
    ? {
      margin: theme[`${margin}Margin`],
    }
    : {};

  const Wrapper = tag || 'p';

  return (
    <Wrapper
      {...props}
      className={componentClassName}
      style={{
        ...style,
        ...(color ? { color } : {}),
        ...(weight ? { fontWeight: weight } : {}),
        ...(center ? { textAlign: 'center' } : {}),
        ...(font ? { fontFamily: font } : {}),
        ...marginStyle,
      }}
    >
      {children}
    </Wrapper>
  );
}

const styles = {
  wrapper: {
    fontFamily: theme.mainFont,
    margin: 0,
    padding: 0,
    color: theme.textColor,
    fontWeight: '300',
  },
  upperCase: {
    textTransform: 'upperCase',
  },
  opacity: { opacity: 0.55 },
  size_2: {
    fontSize: '21px',
    lineHeight: '30px',
    [responsive('mobile')]: {
      fontSize: '19px',
      lineHeight: '26px',
    },
  },
  size_3: {
    fontSize: '19px',
    lineHeight: '24px',
    [responsive('mobile')]: {
      fontSize: '16px',
      lineHeight: '19px',
    },
  },
  size_4: {
    fontSize: '16px',
    lineHeight: '19px',
    [responsive('mobile')]: {
      fontSize: '16px',
      lineHeight: '19px',
    },
  },
  size_5: {
    fontSize: '14px',
    lineHeight: '21px',
    [responsive('mobile')]: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
  size_6: {
    fontSize: '12px',
    lineHeight: '16px',
    [responsive('mobile')]: {
      fontSize: '11px',
      lineHeight: '13.5px',
    },
  },
};

export default injectStyles(styles)(Paragraph);
