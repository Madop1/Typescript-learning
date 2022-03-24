import React from 'react';
import './App.css';
import { propsApp } from './interface';
import { PropsSample } from './PropsSample';
import { User } from './User';
import "./style.scss";
import { Login } from './Login';
import Register from './Register';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ApiCalling from './ApiCalling';
import { Provider } from 'react-redux';
import store from './Redux/store';
 import CakeContainer from './Redux/CakeContainer';
import NewIceCreamContainer from './Redux/IceCreamContainer';
function App({ propName, propNumber = 22 }: propsApp) {
  return (

    <div className="App">
      <PropsSample propName={propName} propNumber={propNumber} />
      <Provider store={store}>
      <CakeContainer />
      <NewIceCreamContainer/> 
      </Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ApiCalling />
    </div>
  );
}

export default App;





