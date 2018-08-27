/**
 * Container.js is a component which allows
 * you to stick to the same offsets everywhere in the app.
 */
import React from 'react';
import classNames from 'classnames';
import injectStyles from 'react-jss';
import type { Classes } from 'react-jss';

let styles = {};
type Props = {
  className: string,
  classes: Classes<typeof styles>,
  children: React.Children,
  index: number,
  type?: 'content' | 'default' | 'bootstrap',
  offset?: 'small' | 'medium' | 'large',
};

const Container = ({
  className,
  type,
  classes,
  offset,
  index,
  children,
  ...props
}: Props): React.Node => {
  const componentClassName = classNames(classes.wrapper, classes[type], classes[offset], className);

  return (
    <div className={componentClassName} {...props}>
      {children}
    </div>
  );
};

styles = {
  wrapper: (props: Props): styles => ({
    margin: '0 auto',
    ...(props.index
      ? {
        zIndex: props.index,
        position: 'relative',
      }
      : {}),
  }),
  small: {
    width: '90%',
  },
  medium: {
    width: '85%',
  },
  large: {
    width: '80%',
  },
  content: {
    maxWidth: '766px',
  },
  default: {
    maxWidth: '1440px',
  },
  bootstrap: {
    maxWidth: '1160px',
  },
};

Container.defaultProps = {
  type: 'default',
  offset: 'small',
};

export default injectStyles(styles)(Container);
