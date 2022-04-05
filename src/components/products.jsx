import React, { Component } from "react";
import { Button } from "react-bootstrap";

import { GetAllProducts } from "../services/fakeProducts";
import AddProduct from "./addProduct";
import Notification from "./common/notification";
import ProductDescriptionTable from "./tables/productDescription";
import ProductsTableBody from "./tables/productsTable";

class Products extends Component {
  state = {
    items: GetAllProducts(),
    columns: {
      "#": "3%",
      ID: "5%",
      "Product Code": "7%",
      Name: "30%",
      Price: "10%",
      Description: "15%",
      _buttons: "20%",
    },
    sellNotificationOpen: false,
    selectedProductObject: {},
    notificationHeading: "",
    notificationDescription: "",
  };

  setModalShow = () => {
    this.setState({ sellNotificationOpen: false });
  };

  generateDescription(object) {
    return (
      <ProductDescriptionTable
        columns={{
          _a: "20%",
          _b: "80%",
        }}
        items={object}
      />
    );
  }

  handleSellButton = (object) => {
    const notificationHeading = "Sell " + object.name;
    const notificationDescription = this.generateDescription(object);
    this.setState({
      sellNotificationOpen: true,
      selectedProductObject: object,
      notificationHeading,
      notificationDescription,
    });
  };

  handleRemoveButton = (object) => {
    const notificationHeading = this.state.action + "Remove " + object.name;
    const notificationDescription = this.generateDescription(object);
    this.setState({
      sellNotificationOpen: true,
      selectedProductObject: object,
      notificationHeading,
      notificationDescription,
    });
  };

  handleAddItemButton = () => {
    const notificationHeading = "Add new product";
    const notificationDescription = <AddProduct />;
    this.setState({
      sellNotificationOpen: true,
      notificationHeading,
      notificationDescription,
    });
  };

  render() {
    const {
      columns,
      items,
      sellNotificationOpen,
      notificationHeading,
      notificationDescription,
    } = this.state;
    return (
      <div>
        <Button
          style={{
            marginLeft: "auto",
            marginRight: "10px",
            marginTop: "10px",
            marginBottom: "10px",
            display: "block",
          }}
          variant="primary"
          size="sm"
          onClick={this.handleAddItemButton}
        >
          Add new product
        </Button>
        <ProductsTableBody
          columns={columns}
          items={items}
          onSellClick={this.handleSellButton}
          onRemoveClick={this.handleRemoveButton}
        />
        <Notification
          show={sellNotificationOpen}
          onHide={this.setModalShow}
          heading={notificationHeading}
          description={notificationDescription}
        />
      </div>
    );
  }
}

export default Products;
