import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, ProductItems, Product, About, NavBar } from './components';
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
