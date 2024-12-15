import _ from 'lodash';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import useIsLoggedIn from './useIsLoggedIn';

const logInPaths = ['/login', '/register', '/logout', '/forgot-password'];
const useAuthentic = ({ to = '', replace = false } = {}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (!isLoggedIn) {
      if (!logInPaths.includes(pathname)) {
        navigate(to || '/login', { replace });
      }
    } else {
      if (!logInPaths.includes(pathname)) return;
      if (logInPaths.includes(pathname)) {
        if (!_.isEmpty(to)) {
          navigate(to, { replace: true });
        } else if (window.history?.length && window.history.length > 1) {
          navigate(-1, { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      }
    }
  }, [isLoggedIn]);
};

export default useAuthentic;
