import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';

import { isAuthenticated } from './services/auth';
import './styles/global.css';

import { SINGIN, CHATROOM } from './constants/routes';

import SignIn from './pages/SignIn';
import ChatRoom from './pages/ChatRoom';

interface Props {
  component: React.FC<RouteComponentProps>;
  exact?: boolean;
  path: string;
}
const PrivateRoute = ({ component: Component, ...rest }: Props) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={SINGIN} component={SignIn} />
      <PrivateRoute path={CHATROOM} component={ChatRoom} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
