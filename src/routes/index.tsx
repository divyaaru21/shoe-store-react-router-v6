import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from '../components/about';
import Home from '../components/home';
import NavBar from '../components/navbar';
import ProductItems from '../components/productItems';
import Product from '../components/product';

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
