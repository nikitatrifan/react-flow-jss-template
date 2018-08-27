/**
 * Heading is a component with an app Heading typography settings.
 * It needs to stick to the same Heading style everywhere the app.
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
};

function Heading(props: Props): React.Node {
  const {
    size = 2,
    classes,
    center,
    weight,
    margin,
    style,
    color,
    className,
    children,
    ...__props
  } = props;

  const componentClassName = classNames(classes.wrapper, classes[`size_${size}`], className);

  const marginStyle = margin
    ? {
      margin: theme[`${margin}Margin`],
    }
    : {};

  const Tag = `h${size}`;

  return (
    <Tag
      {...__props}
      className={componentClassName}
      style={{
        ...style,
        ...(color ? { color } : {}),
        ...(center ? { textAlign: 'center' } : {}),
        ...(weight ? { fontWeight: weight } : {}),
        ...marginStyle,
      }}
    >
      {children}
    </Tag>
  );
}

const styles = {
  wrapper: {
    fontFamily: theme.mainFont,
    margin: 0,
    padding: 0,
  },
  size_1: {
    fontSize: '39px',
    lineHeight: '50px',
    fontWeight: '500',
    color: theme.textColor,
    [responsive('mobile')]: {
      fontSize: '28px',
      lineHeight: '36px',
    },
  },
  size_2: {
    fontSize: '36px',
    lineHeight: '46px',
    fontWeight: '500',
    [responsive('mobile')]: {
      fontSize: '26px',
      lineHeight: '34px',
    },
  },
};

export default injectStyles(styles)(Heading);
