
import React from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/index/Index'
import Footer from './components/footer/Footer'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import CheckOut from './pages/CheckOut'
import About from './pages/About'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Nav/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

