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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import OtpVerify from './components/otpverify/OtpVerify'
import CardSidebar from './components/card/CardSidebar'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/otpVerify/:email" element={<OtpVerify />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='productDetails' element={<ProductDetailsPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='cardSidebar' element={<CardSidebar />} />
          <Route path='checkout' element={<CheckoutPage />} />
        </Route>
      </Routes>

      {/* ToastContainer should be outside Routes */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        rtl={false}
        pauseOnHover={true}
        theme="dark"
      />
    </BrowserRouter>
  )
}

export default App
