import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = el => {
    ReactDOM.render(
        <App />,
        el
    );
};

// if (process.env.NODE_ENV !== 'production') {
//     const el = document.querySelector('#markertingApp');
//     mount(el);
// }


console.log('Running bootstrap');

export {
    mount,
};