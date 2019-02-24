import React, { Component } from 'react';
import { Layout } from './layout';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Index } from '../components/index';
import { routes } from './routing';
import { spring, AnimatedSwitch } from 'react-router-transition';
import styled, { css } from 'styled-components';

const AnimatedSwitchStyled = styled(AnimatedSwitch)`
  position: relative;
  & > div {
    position: absolute;
    width: 100%;
    padding-bottom: 3rem;
  }
`;

function zoom(val: number) {
  return spring(val, {
    stiffness: 135,
    damping: 15,
  });
}

const switchConfig = {
  atEnter: {
    opacity: 0,
    offset: -50,
  },
  atLeave: {
    opacity: 0,
    offset: zoom(50),
  },
  atActive: {
    opacity: 1,
    offset: zoom(0),
  },
};

function mapStyles(styles: any) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.offset}px)`,
  };
}

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        
        <Layout>
          <AnimatedSwitchStyled
            {...switchConfig}
            mapStyles={mapStyles}
          >
            {
              routes.map(route => {
                const stripped = {
                  ...route,
                  bold: undefined,
                  heading: undefined,
                }
                return <Route {...stripped}/>
              })
            }
          </AnimatedSwitchStyled>
        </Layout>
      </Router>
    );
  }
}

export default App;
