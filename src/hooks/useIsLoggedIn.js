import { useSelector } from 'react-redux';
import { isVerifiedUser } from '../utils/auth';

export default () =>
  useSelector((state) => state.auth.isLogged || isVerifiedUser());
