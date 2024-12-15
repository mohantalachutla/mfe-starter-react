import { useSelector } from 'react-redux';
import { getToken, setToken } from '../utils/auth';

export default () => {
  const token = useSelector((state) => state.auth.token);
  if (!getToken()) {
    setToken(token);
  }
  return token;
};
