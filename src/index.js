import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers/index'

// const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default



// import combineReducers from './reducers/index'



// const reuser = (state = 5, action) => {
//   switch(action.type){
//     case 'INCREASE':
//       return state +1
//     default:
//       return state
//   }
// }

// const store = createStore(
//     rootReducers, applyMiddleware(thunkMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

const store = createStore(
    rootReducers, {}, compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

// store.subscribe(() => console.log('Before dispatching', store.getState()))
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(login())

// export const increment1 = () => {
//     return {
//         type: 'INCREMENT',
//     }
// }
// store.dispatch(increment1())



ReactDOM.render(
  // <Provider store={store}>
  //  <App />
  // </Provider>,
  <Provider store={store}>
   <App1 />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
