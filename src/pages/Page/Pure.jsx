import PropTypes from "prop-types";
import { Container, Row, Col } from "../../components/base";
import { Product } from "../../components/Product";
const Page = ({ products = [] } = props) => {
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
export default Page;

Page.propTypes = {
  products: PropTypes.array.isRequired,
};

Page.defaultProps = {
  products: [],
};
