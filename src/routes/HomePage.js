import React from 'react';
import injectStyle from 'react-jss';
import type { Classes } from 'react-jss';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

type Props = {
  classes: Classes,
};

function HomePage(props: Props): React.Node {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Container type="content">
        <Heading margin="medium">Template</Heading>
        <Paragraph margin="small">
          A simple template for some projects based on create-react-app, flow-type and react-jss.
        </Paragraph>
      </Container>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#fafafa',
    padding: '60px 0',
  },
};

export default injectStyle(styles)(HomePage);
