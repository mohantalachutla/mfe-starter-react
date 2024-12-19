import { createReduxStore } from '@mohantalachutla/inject-store';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';

//sage middleware
const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = createReduxStore({
    middlewares: { sagaMiddleware },
  });

  //injecting reducers and sagas
  const { injectReducers, injectSaga } = store;
  injectReducers(rootReducer);
  injectSaga('rootSaga', rootSaga);

  return store;
};

export default createStore();
