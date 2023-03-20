import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import { Routes } from 'react-router';
import ProductPage from './pages/ProductPage';

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<ProductPage />} path='/product/:id' />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
