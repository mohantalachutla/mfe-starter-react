import { HashRouter } from 'react-router';
import AppWrapper from './components/common/AppWrapper';
import AppRoutes from './Routes';
export default () => {
  return (
    <AppWrapper>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </AppWrapper>
  );
};
