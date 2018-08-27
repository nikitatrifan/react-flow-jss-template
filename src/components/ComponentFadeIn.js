/**
 * When children of ComponentFadeIn it is in viewport.
 * it will be simply animated.
 *
 * Example:
 * <ComponentFadeIn>
 *     <span>Component To Fade In</span>
 * </ComponentFadeIn>
 */
import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { TweenMax } from 'gsap';

type Props = {
  gap?: number,
  minOpacity?: number,
  maxOpacity?: number,
  delay?: number,
  duration?: number,
  noReset?: boolean,
  noAnimation?: boolean,
  onlyFadeIn: boolean,
  onLeave: Function => void,
  onEnter: Function => void,
  children: React.Children,
};

export default class ComponentFadeIn extends Component<Props> {
  static defaultProps = {
    gap: -20,
    minOpacity: 0,
    maxOpacity: 1,
    delay: 0,
    duration: 0.5,
    noReset: false,
    noAnimation: false,
  };

  wrapper: React.Ref = null;

  hasFaded: boolean = false;

  componentDidMount(): null {
    // this option needs when you have to show
    // a block without using Waypoint
    const { onlyFadeIn } = this.props;

    if (onlyFadeIn) {
      return this.resetBlock(this.enterHandler);
    }

    // set initial styles
    return this.resetBlock();
  }

  setRef = (b: React.Ref): React.Ref => (this.wrapper = b);

  get block(): Array<HTMLDivElement> {
    return this.wrapper.children;
  }

  resetBlock = (onComplete: Function => void): null => {
    const { gap, noAnimation, minOpacity } = this.props;
    if (noAnimation) return;

    TweenMax.set(this.block, {
      opacity: minOpacity,
      y: -gap,
      onComplete,
    });
  };

  enterHandler = (): null => {
    const {
      noAnimation, duration, delay, maxOpacity, onEnter,
    } = this.props;
    if (noAnimation) return;

    if (!this.hasFaded) {
      TweenMax.to(this.block, duration, {
        opacity: maxOpacity,
        y: 0,
        delay,
      });
    }

    this.hasFaded = true;

    if (onEnter) {
      onEnter();
    }
  };

  leaveHandler = (): null => {
    const { noReset, onLeave } = this.props;
    if (noReset) {
      this.resetBlock();
    }

    if (onLeave) {
      onLeave();
    }
  };

  render(): React.Node {
    const { children, onlyFadeIn } = this.props;
    if (onlyFadeIn) {
      return children;
    }

    return (
      <Waypoint onEnter={this.enterHandler} onLeave={this.leaveHandler}>
        <span ref={this.setRef}>{children}</span>
      </Waypoint>
    );
  }
}
