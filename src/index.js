import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
<<<<<<< HEAD
=======
import App from './App';
>>>>>>> dc7a954e64420f09ed429e22bb0811e3e23a6101
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
