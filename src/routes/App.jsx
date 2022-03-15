import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import NewPassword from '../containers/NewPassword'
import CreateUser from '../containers/CreateUser';
import MyAccount from '../containers/MyAccount';
import ProductInfo from '../containers/ProductInfo';
import MyOrder from '../containers/MyOrder';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App