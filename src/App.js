import { HashRouter } from 'react-router-dom';
import AppRoutes from './Routes';
export default (props) => {
  return (
    <HashRouter>
      <AppRoutes {...props} />
    </HashRouter>
  );
};
