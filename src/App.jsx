import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteLayout from './components/RouteLayout';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout'; 
import React from 'react';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RouteLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/cart" element={<Cards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
