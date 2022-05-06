import {routerMiddleware} from "react-router-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "redux/reducers";
import rootSaga from "redux/sagas";
import {createBrowserHistory} from "history";


const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer(history),
    {},
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);
