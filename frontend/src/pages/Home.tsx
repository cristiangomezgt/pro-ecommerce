import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from '../dummy-data/products.js';
import { Product } from '../types/Product.js';

type Props = {};

const Home: FC = (props: Props) => {
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
