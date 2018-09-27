
import { clickReducer } from './clickReducer';
//import { otherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer,
  //otherState: otherReducer
});

/*import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';

export const Reducers = { //redux -- extraindo a chave new vallue  src/reducers/clickReducer.js na linha 12:
  clickState: clickReducer
};
//export const Reducers = { clickReducer };
*/