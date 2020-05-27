import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { autorun } from 'mobx';
import { RootStore } from './stores';
import { Provider } from 'mobx-react';

const mobXStore = new RootStore();

ReactDOM.render(<Provider {...mobXStore}>
    <App />
</Provider>, document.getElementById('root'));
