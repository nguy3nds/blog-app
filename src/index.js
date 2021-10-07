import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import reducers from "./redux/reducers/";
import mySaga from "./redux/sagas";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
