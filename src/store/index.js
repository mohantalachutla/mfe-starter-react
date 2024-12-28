import { createReduxStore } from '@mohantalachutla/inject-store';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import { getProjectName } from '../utils/config';

//sage middleware
const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = createReduxStore({
    middlewares: { sagaMiddleware },
  });

  //injecting reducers and sagas
  const { injectReducers, injectSaga } = store;
  injectReducers(rootReducer);
  injectSaga(
    `rootSaga__${getProjectName({ camelCase: true }) || 'app' + new Date().getTime()}`,
    rootSaga
  );
  return store;
};

export default createStore();
