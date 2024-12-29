import { HashRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { withAppWrapper } from './components/common/AppWrapper';

const App = (props) => {
  return (
    <HashRouter>
      <AppRoutes {...props} />
    </HashRouter>
  );
};

export default withAppWrapper(App);
