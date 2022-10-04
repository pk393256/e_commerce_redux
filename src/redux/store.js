// import redux from 'redux';
import { reducer } from './reducer';
import { legacy_createStore as createStore } from 'redux';
// const createStore=redux.legacy_createStore;
const store = createStore(reducer,{token:false});

export default store;