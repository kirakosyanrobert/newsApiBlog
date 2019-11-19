import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/rootReducer';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.register();
