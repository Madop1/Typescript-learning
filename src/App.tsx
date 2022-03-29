import React from 'react';
import "./App.css"

import { propsApp } from './interface';
import { PropsSample } from './PropsSample';
import "./style.scss";
import { Login } from './Login';
import Register from './Register';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ApiCalling from './ApiCalling';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CakeContainer from './Redux/CakeContainer';
import NewIceCreamContainer from './Redux/IceCreamContainer';
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import EditUsers from './Pages/EditUser';
import HomeComponent from './HomeComponent';
import Shop from './Redux/Shop';
function App({ propName, propNumber = 22 }: propsApp) {
  return (

    <div className="App">
      {/* <PropsSample propName={propName} propNumber={propNumber} /> */}
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            {/* <Route path="/" element={<User />} /> */}
            <Route path='/crud' element={<Home />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/editusers/:id" element={<EditUsers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            <Route path ="/" element={<HomeComponent />} />
          </Routes>
        </Provider>
      </BrowserRouter>
      {/* <ApiCalling /> */}
    </div>
  );
}

export default App;





