import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuessingApp from './components/GuessingApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GuessingApp />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
