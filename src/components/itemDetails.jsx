import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import { getItem } from "../services/fakeItems";
import ItemDescriptionTable from "./tables/itemDescription";

import "../App.css";

const ItemDetails = () => {
  const { id } = useParams();
  const item = getItem(parseInt(id));

  return (
    <div className="content">
      <h3>Item Details - {item.name}</h3>
      <br />
      <ItemDescriptionTable
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

export default ItemDetails;
