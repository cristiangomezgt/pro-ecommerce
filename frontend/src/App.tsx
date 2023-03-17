import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Home></Home>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
