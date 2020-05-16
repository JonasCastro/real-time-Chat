import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SINGIN } from './constants/routes';
import './styles/global.css';

import SignIn from './pages/SignIn';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={SINGIN} component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
