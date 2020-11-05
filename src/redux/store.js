/* import {createStore} from 'redux';
import penReducer from './pen/Reducer';

const store=createStore(penReducer);

export default store; */

import { applyMiddleware, createStore } from 'redux';
import penReducer from './pen/penReducer';
import logger from 'redux-logger'

const store = createStore(
    penReducer,
  applyMiddleware(logger)
)

export default store;