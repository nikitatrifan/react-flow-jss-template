/**
 * Box.js is a component which allows
 * you to manipulating of flexbox css feature easier and faster.
 */
import React from 'react';
import classNames from 'classnames';
import injectStyles from 'react-jss';
import type { Classes } from 'react-jss';

type Props = {
  children: React.Children,
  classes: Classes,
  justify: 'start' | 'end' | 'between' | 'around' | 'center',
  align: 'start' | 'end' | 'center',
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse',
  className: string,
  wrap: boolean,
};

const Box = (__props: Props): React.Node => {
  const {
    children, classes, align, direction, justify, wrap, className, ...props
  } = __props;

  const componentClassName = classNames(
    classes.wrapper,
    className,

    align === 'start' && classes.alignStart,
    align === 'center' && classes.alignCenter,
    align === 'end' && classes.alignEnd,

    direction === 'row' && classes.dirRow,
    direction === 'column' && classes.dirCol,
    direction === 'row-reverse' && classes.dirRowRev,
    direction === 'column-reverse' && classes.dirColRev,

    justify === 'between' && classes.jusBetween,
    justify === 'around' && classes.jusAround,
    justify === 'start' && classes.jusStart,
    justify === 'end' && classes.jusEnd,
    justify === 'center' && classes.jusCenter,

    wrap && classes.wrap,
  );

  return (
    <div className={componentClassName} {...props}>
      {children}
    </div>
  );
};

const styles = {
  wrapper: { display: 'flex' },
  alignStart: { alignItems: 'flex-start' },
  alignCenter: { alignItems: 'center' },
  alignEnd: { alignItems: 'flex-end' },
  dirRow: { flexDirection: 'row' },
  dirCol: { flexDirection: 'column' },
  dirRowRev: { flexDirection: 'row-reverse' },
  dirColRev: { flexDirection: 'column-reverse' },
  jusBetween: { justifyContent: 'space-between' },
  jusCenter: { justifyContent: 'center' },
  jusAround: { justifyContent: 'space-around' },
  jusStart: { justifyContent: 'flex-start' },
  jusEnd: { justifyContent: 'flex-end' },
  wrap: { flexWrap: 'wrap' },
};

Box.defaultProps = {
  align: 'start',
  direction: 'row',
  justify: 'start',
};

export default injectStyles(styles)(Box);
