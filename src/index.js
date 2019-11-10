/*import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom"
//import Resume from './components/Resume'
import App from './App'
         
         
                 

                

ReactDom.render(<BrowserRouter><App/></BrowserRouter> ,document.querySelector("#root"))
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  , document.getElementById('root'));
serviceWorker.unregister();

