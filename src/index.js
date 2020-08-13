import React from 'react';
import ReactDOM from 'react=dom';
import './index.css';
import App from './App';
import * as serviceworker from './serviceworker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.strictMode>
  <App />
  </React.strictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes sith some pitfalls
// rearn more about service workers: http://bit.ly/CRA-PWA
serviceworker.unregister();
