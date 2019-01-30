import React, { Component } from 'react';
import { Layout } from './layout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Index } from '../components/index';
import { routes } from './routing';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
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
        </Layout>
      </Router>
    );
  }
}

export default App;
