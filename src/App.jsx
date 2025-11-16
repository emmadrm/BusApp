import React from 'react';
import './App.css';
import {  Routes , Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vacuum from './pages/Vacuum';
import Delivery from './pages/Delivery';
import Information from './pages/Information';
import Navigator from './pages/Navigator';
import View from './pages/View';
import Menu from './components/Menu';
import Checkout from './components/Checkout';


function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vacuum' element={<Vacuum />} />
        <Route path='/view' element={<View />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/info' element={<Information />} />
        <Route path='/gps' element={<Navigator />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
    </div>
  );
}

export default App;