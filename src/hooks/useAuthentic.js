import _ from 'lodash';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useIsLoggedIn from './useIsLoggedIn';
import useNavigate from './useNavigate';

const logInPaths = ['/login', '/register', '/logout', '/forgot-password'];
// eslint-disable-next-line no-unused-vars
const useAuthentic = ({ to = '', replace = false } = {}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoggedIn = useIsLoggedIn();
  useEffect(() => {
    if (!isLoggedIn) {
      return;
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
