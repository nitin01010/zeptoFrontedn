import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import SignupPage from '../Pages/signupPage';
import LoginPage from '../Pages/LoginPage';
import ItemDetails from '../Pages/ItemDetails';
import ProductsInfo from '../Pages/ProductsInfo';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {/*  Public Route */}
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cn/fruits-vegetables/all/:id' element={<ItemDetails />} />
        <Route path='/pn/:name/pvid/:id' element={<ProductsInfo />} />

        {/* Admin Account   */}
        <Route path='/account/dashboard/:id' element={<h1>Selle Account</h1>} />
        <Route path='/account/seller/signup' element={<h1>Seller Account Signup</h1>} />
        <Route path='/account/seller/login' element={<h1>Seller Account login</h1>} />
        <Route path='/account/seller/createProduct' element={<h1>Seller Account createProduct</h1>} />
        <Route path='/account/seller/created/:id' element={<h1>Seller Account update Created</h1>} />
        <Route path='/account/seller/update/:id' element={<h1>Seller Account update Produected</h1>} />
        
      </Routes>
    </div>
  )
}

export default MainRoutes