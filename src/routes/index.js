import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';
import Main from '../pages';
import Info from '../pages/Info';
import NoMatch from '../pages/NoMatch';
import ProductList from '../pages/ProductList';
import Review from '../pages/Review';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

export default function RootRoute() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/info' element={<Info />} />
            <Route path='/product' element={<ProductList/>} />
            <Route path='/result/' element={<ProductDetail />} />
            <Route path='/review' element={<Review />} />
            <Route path='/*' element={<NoMatch/>} />
        </Routes>
    </BrowserRouter>
    )
}
