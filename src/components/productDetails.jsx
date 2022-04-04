import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { GetProduct } from "../services/fakeProducts";
import ProductDescriptionTable from "./tables/productDescription";

import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const item = GetProduct(parseInt(id));

  return (
    <div className="content">
      <Link to="/products">
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="lg"
          style={{ marginBottom: "10px" }}
        />
      </Link>
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
