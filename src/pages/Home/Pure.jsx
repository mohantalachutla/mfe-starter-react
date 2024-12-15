import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/base/Container';
import Row from '../../components/base/Row';
import Col from '../../components/base/Col';
import { Product } from '../../components/Product';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withWrapper } from 'components/common/AppWrapper';
import { helloAction } from '../../actions';
const Page = ({ products = [] } = props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(helloAction('john'));
    }
  }, [dispatch]);
  return (
    <Container size="md">
      {products.length === 0 && (
        <div className="alert alert-info" role="alert">
          No products found
        </div>
      )}
      {products.map((product) => (
        <Row key={product.id}>
          <Col size="md" offset="12">
            <Product {...product} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default withWrapper(Page);

Page.propTypes = {
  products: PropTypes.array,
};
