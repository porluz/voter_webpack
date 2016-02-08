'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app-container.jsx';
import '../sass/styles.scss';

var myReact = React;

export default class App {
    constructor(node) {
        this.node = node;
    }
    run() {
        ReactDOM.render(React.createElement(AppContainer, null), this.node);
    }
}
