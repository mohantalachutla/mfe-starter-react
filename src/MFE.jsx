import Card from './components/base/Card';
import App from './App';
import { NODE_ENV } from './env';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './reducers/auth';
import packageJson from '../package.json';

const MFE = (_props = {}) => {
  const [props, setProps] = useState(_props);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setProps(_props);
    const { loginInfo = {} } = _props;
    dispatch(loginSuccess(loginInfo));
  }, [_props]);
  return (
    <div className="container">
      <Card className="mt-4">
        {/* Exposing app module in development mode only */}
        {NODE_ENV === 'development' ? <App {...props} /> : <ProdDisclaimer />}
      </Card>
    </div>
  );
};

const ProdDisclaimer = () => {
  return (
    <div>
      <h2>
        This is MFE Application, {packageJson.name}. It can not be used
        directly.{' '}
      </h2>
      <h2>{packageJson.description}</h2>
    </div>
  );
};
export default MFE;
