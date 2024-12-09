import { Provider } from 'react-redux';
import store from '../../store';
import { Loader } from './Loader';
import ErrorBoundary from './ErrorBoundary';
import GlobalModal from './GlobalModal';
import GlobalAlert from './GlobalAlert';

export const AppWrapper = ({ children }) => {
  return (
    <div id="mfe-wrapper">
      <ErrorBoundary>
        <Provider store={store}>
          <Loader />
          <GlobalModal />
          <GlobalAlert />
          {children}
        </Provider>
      </ErrorBoundary>
    </div>
  );
};

export default AppWrapper;

export const withWrapper = (Component) => (props) => (
  <AppWrapper>
    <Component {...props} />
  </AppWrapper>
);
