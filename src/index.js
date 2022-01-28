import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './utils/style/index.css';
import reportWebVitals from './reportWebVitals';
import RowNav from './components/RowNav';
import Error from './components/Error';
import Profile from './pages/Profile';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RowNav />
      <Routes>
        <Route exact path='/profile' element={<Profile />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
