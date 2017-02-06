import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createEpicMiddleware } from 'redux-observable';
import reducers from '../reducers';
import epics from '../epics';

export default function configStore(initalState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware(epics);

  return createStore(
    reducers,
    initalState,
    composeEnhancers(
      applyMiddleware(epicMiddleware, reduxImmutableStateInvariant())
    )
  );
}
