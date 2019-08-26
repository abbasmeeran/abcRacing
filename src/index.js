import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './i18n/i18n';
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import { history } from "./helpers/history";

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
