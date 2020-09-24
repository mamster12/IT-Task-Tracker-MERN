import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import logReducer from './reducers/logReducer';
import techReducer from './reducers/techReducer';

const middleware = [thunk];
export default () => {
    const store = createStore(
        combineReducers({
            log: logReducer,
            tech: techReducer
        }),
        composeWithDevTools(applyMiddleware(...middleware))
    );

    return store;
};
