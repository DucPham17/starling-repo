import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import { Modals } from './Component/Modals';
import "react-datepicker/dist/react-datepicker.css";
import { FullPageLoading } from './Component/Common/FullPageLoading';
//import axios from 'axios'
//axios.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'}
//axios.defaults.baseURL = "https://localhost:5000";

ReactDOM.render(
  <Provider store = {store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <FullPageLoading/>
        <Modals/>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
