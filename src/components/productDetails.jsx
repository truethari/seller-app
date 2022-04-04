import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import { getProduct } from "../services/fakeProducts";
import ProductDescriptionTable from "./tables/productDescription";

import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const item = getProduct(parseInt(id));

  return (
    <div className="content">
      <h3>Product Details - {item.name}</h3>
      <br />
      <ProductDescriptionTable
        columns={{
          _a: "20%",
          _b: "80%",
        }}
        items={item}
      />
      <br />
      <center>
        <Button
          style={{ marginLeft: 0, marginRight: 20 }}
          variant="primary"
          size="lg"
        >
          Edit
        </Button>
        <Button
          style={{ marginLeft: 0, marginRight: 20 }}
          variant="warning"
          size="lg"
        >
          Sell
        </Button>
        <Button
          style={{ marginLeft: 0, marginRight: 20 }}
          variant="danger"
          size="lg"
        >
          Remove
        </Button>
      </center>
    </div>
  );
};

export default ProductDetails;
