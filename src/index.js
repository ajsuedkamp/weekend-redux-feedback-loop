import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feeling = (state = 1, action) => {
    if (action.type === 'SET_FEELING') {
        // dispatch will have type of 'SET_FEELING'
        // and payload with the value to set
        return action.payload
    }
    return state;
}

const understanding = (state = 1, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        // dispatch will have type of 'SET_UNDERSTANDING'
        // and payload with the value to set
        return action.payload
    }
    return state;
}

const support = (state = 1, action) => {
    if (action.type === 'SET_SUPPORT') {
        // dispatch will have type of 'SET_SUPPORT'
        // and payload with the value to set
        return action.payload
    }
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        // dispatch will have type of 'SET_COMMENTS'
        // and payload with value to set
        return action.payload
    }
    return state;
}

// Redux store to keep track of all reducers.
const storeInstance = createStore(
    combineReducers(
        {
           feeling,
           understanding,
           support,
           comments, 
        }
    ),
    applyMiddleware(logger)
)


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));



registerServiceWorker();
