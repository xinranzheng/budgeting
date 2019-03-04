import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './Store';
import Homepage from './Containers/Homepage';
import NewPage from './Containers/NewPage';
import './css/index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path='/' exact component={Homepage} />
                <Route path='/newpage' component={NewPage} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
