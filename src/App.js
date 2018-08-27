import React, { Component } from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { TweenMax } from 'gsap';
import Helmet from 'react-helmet';
import HomePage from './routes/HomePage';

type Props = {
  location: {
    key: string,
  },
};
type State = null;
type SnapshotType = boolean | null;

class App extends Component {
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: SnapshotType) {
    // show a content if there was a snapshot
    if (snapshot) {
      TweenMax.to(this.wrapper, 0.6, {
        opacity: 1,
      });
    }
  }

  getSnapshotBeforeUpdate(prevProps: Props): SnapshotType {
    // flash transition between pages
    const nextLocation = this.props.location; // eslint-disable-line
    const prevLocation = prevProps.location;
    if (nextLocation.key !== prevLocation.key) {
      // scroll to top of a page
      window.scrollTo(0, 0);
      // hide a content
      TweenMax.set(this.wrapper, {
        opacity: 0,
      });

      return true;
    }

    return null;
  }

  setWrapperRef = (b: React.Ref): React.Ref => (this.wrapper = b);

  render(): React.Node {
    return (
      <div ref={this.setWrapperRef}>
        <Helmet>
          <title>React Flow Example — Nikita Trifan</title>
        </Helmet>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
