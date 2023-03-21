import React, { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product.js';
import axios from 'axios';

const Home: FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product: Product) => (
          <Col key={product._id} sm={12} md={6} lg={6} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
