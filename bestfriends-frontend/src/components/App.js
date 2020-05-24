import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';


import Welcome from './Welcome';
import Layout from './Layout';

function App(props) {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
