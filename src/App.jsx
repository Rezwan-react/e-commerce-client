import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Register from './components/register/Register'
import Login from './components/login/Login'
import ProfilePage from './pages/ProfilePage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='productDetails' element={<ProductDetailsPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
