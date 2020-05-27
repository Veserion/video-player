import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { autorun } from 'mobx';
import { RootStore } from './stores';
import { loadState, saveState } from './utils/localStore';
import { Provider } from 'mobx-react';

const initState = loadState();
const mobXStore = new RootStore();

ReactDOM.render(<Provider {...mobXStore}>
    <App />
</Provider>, document.getElementById('root'));
