import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from './App/App'
import Supermarket from "./components/Supermarket/supermarket"
import ClothesShop from "./components/ClothesShop/clothesShop"
import Farm from "./components/Farm/farm"
import School from "./components/School/school"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App/>}></Route>
                <Route path="/supermarket" element={<Supermarket/>}></Route>
                <Route path="/clothesShop" element={<ClothesShop/>}></Route>
                <Route path="/farm" element={<Farm/>}></Route>
                <Route path="/school" element={<School/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
  </React.StrictMode>
);

