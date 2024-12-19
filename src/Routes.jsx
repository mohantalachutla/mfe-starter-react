import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Pages
import PageNotFound from './components/common/PageNotFound';
import Text from './components/base/Text';
import Home from './pages/Home';
import useAuthentic from 'hooks/useAuthentic';
import { useDispatch } from 'react-redux';
import { getToken, getUser } from './utils/auth';
import { loginSuccess } from './reducers/auth';
import { useEffect } from 'react';
import useIsLoggedIn from './hooks/useIsLoggedIn';
import useToken from './hooks/useToken';

const AppRoutes = (props) => {
  useAuthentic();
  const dispatch = useDispatch();
  const token = useToken();
  useEffect(() => {
    if (!token && getToken()) {
      dispatch(
        loginSuccess({
          user: getUser(),
          token: getToken(),
        })
      );
    }
  }, []);
  return (
    <Switch>
      {/* protected routes */}
      <PrivateRoute path="/" exact render={() => <Home {...props} />} />
      {/* public routes */}
      <Route path="*" render={() => <PageNotFound {...props} />} />
    </Switch>
  );
};

export default AppRoutes;

const PrivateRoute = ({ render, ...props }) => {
  const isLoggedIn = useIsLoggedIn();
  return <Route {...props} render={isLoggedIn ? render : LoginDisclaimer} />;
};

const LoginDisclaimer = () => {
  return (
    <Text variant="pre">
      <Text variant="h3">
        Please <Text variant="b">Login</Text> to view this page
      </Text>
    </Text>
  );
};
