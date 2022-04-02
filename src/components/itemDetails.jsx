import React, { Component } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();

  return (
    <div className="itemdetails">
      <h1>Item Details - {id}</h1>
    </div>
  );
};

export default ItemDetails;
