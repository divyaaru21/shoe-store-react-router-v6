import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NavBar from './components/Navbar';
import ProductItems from './components/Products';
import Product from './components/Product';

function RouteConfig() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<ProductItems />} />
                <Route path="products/:id" element={<Product />} />
            </Routes>
        </BrowserRouter >
    );
}

export default RouteConfig;
