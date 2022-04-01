import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      {/* <Route path='/signup' element={<SignUpForm />}></Route>
      <Route path='/login' element={<LoginForm />}></Route> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();