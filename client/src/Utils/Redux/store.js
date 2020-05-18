import { createStore, applyMiddleware } from 'redux';
import cartReducer from './cartReducer';

const store = createStore(
    (cartReducer)
    // ,
    //  {},
    //  applyMiddleware(logger())
);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
  });

  export default store;