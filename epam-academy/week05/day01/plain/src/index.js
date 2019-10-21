import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux'

const initstate = {counter : 0, tags: []}


const counterReducer = function(state = initstate, action){
  switch (action.type) {
    case 'INCREASE' : 
    return{
      ...state, counter: state.counter + (action.amount || 1)
    }

    case 'DECREASE' : 
    return{
      ...state, counter: state.counter - (action.amount || 1)
    }

    case 'SET' :
      {if (action.amount === undefined){
        return{
          ...state, counter: 0
        }
      }
      else {
        return{
          ...state, counter:action.amount
        }
      }}

    default:
      return state
  }
}

const tagReducer = function(state = initstate, action){
  switch(action.type){
    case 'ADD_TAG':
      return {...state,  tags: [...state.tags, action.tag]}

    case 'REMOVE_TAG':
      return {...state, 
        tags: state.tags.filter((value) => {
          return value !== action.tag
        })}

    case 'REMOVE_TAGS':
      return{
        ...state,
        tags: []
      }

    default:
          return state
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  tags: tagReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





console.log(store.getState())

store.dispatch({type: 'SET', amount: 6});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'INCREASE', amount: 2});
store.dispatch({type: 'SET'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'DECREASE', amount: 4});

store.dispatch({type: 'ADD_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'REMOVE_TAGS'});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
