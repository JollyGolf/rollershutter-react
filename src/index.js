import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page';
import './css/style.css';
import './css/media-style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));
serviceWorker.unregister();