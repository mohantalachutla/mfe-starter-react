import { Provider } from 'react-redux';
import store from '../../store';
import ErrorBoundary from './ErrorBoundary';
import Noop from './Noop';

const StoreWrapper = ({ children, AdditionalWrapper = Noop }) => {
  return (
    <div id="store-wrapper">
      <ErrorBoundary>
        <Provider store={store}>
          <AdditionalWrapper>{children}</AdditionalWrapper>
        </Provider>
      </ErrorBoundary>
    </div>
  );
};

export default StoreWrapper;

export const withStoreWrapper = (Component, AdditionalWrapper) => (props) => (
  <StoreWrapper AdditionalWrapper={AdditionalWrapper}>
    <Component {...props} />
  </StoreWrapper>
);
