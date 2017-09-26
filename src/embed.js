/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
/* ------------------------- Internal Dependencies -------------------------- */
import Root from 'interface';
import { configureStore, history } from 'store/configuration';

/* ------------------------ Initialize Dependencies ------------------------- */
const store = configureStore();

/* ------------------------ Components Entry ------------------------- */
const rootElement = document.getElementById('root')
ReactDOM.render(<AppContainer><Root store={store} history={history} /></AppContainer>, document.getElementById('root'));
