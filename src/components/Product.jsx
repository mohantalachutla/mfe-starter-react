import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Rating } from "./base";
import { HiShoppingCart } from "../icons";
export function Product({ name, id, description, price, image, rating }) {
  return (
    <Card className="max-w-sm md:w-72" imgAlt={name} imgSrc={image} id={id}>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <Rating rating={rating} total={5} />
      <div className="flex items-center justify-around">
        <div className="inline text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </div>
        <Button>
          <HiShoppingCart className="mr-2 h-5 w-5" />
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

export default Product;

Product.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
};

Product.defaultProps = {
  name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  price: 599,
};
