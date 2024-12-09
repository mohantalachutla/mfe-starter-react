import {
  createReduxStore,
  createInjectReducer,
  createInjectSaga,
} from '@mohantalachutla/inject-store';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';

//sage middleware
const sagaMiddleware = createSagaMiddleware();

const store = createReduxStore({ middlewares: [sagaMiddleware] });
const { injectReducers } = createInjectReducer(store);
const { injectSaga } = createInjectSaga(store, sagaMiddleware.run);

//injecting reducers and sagas
injectReducers(rootReducer);
injectSaga('rootSaga', rootSaga);

console.info({ store });
export default store;
