import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SINGIN, CHATROOM } from './constants/routes';
import './styles/global.css';

import SignIn from './pages/SignIn';
import ChatRoom from './pages/ChatRoom';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={SINGIN} component={SignIn} />
      <Route path={CHATROOM} component={ChatRoom} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
