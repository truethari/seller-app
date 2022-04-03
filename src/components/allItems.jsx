import React, { Component } from "react";
import { Button } from "react-bootstrap";

import { getAllItems } from "../services/fakeItems";
import AddItem from "./addItem";
import Notification from "./common/notification";
import AllItemsTableBody from "./tables/allItemsTable";
import ItemDescriptionTable from "./tables/itemDescription";

class AllItems extends Component {
  state = {
    items: getAllItems(),
    columns: {
      "#": "3%",
      ID: "5%",
      "Item Code": "7%",
      Name: "30%",
      Price: "10%",
      Description: "15%",
      _buttons: "20%",
    },
    sellNotificationOpen: false,
    selectedItemObject: {},
    action: "",
    notificationHeading: "",
    notificationDescription: "",
  };

  setModalShow = () => {
    this.setState({ sellNotificationOpen: false });
  };

  generateDescription(object) {
    return (
      <ItemDescriptionTable
        columns={{
          _a: "20%",
          _b: "80%",
        }}
        items={object}
      />
    );
  }

  handleSellButton = (object) => {
    const notificationHeading =
      this.state.action + " " + this.state.selectedItemObject.name;
    const notificationDescription = this.generateDescription(
      this.state.selectedItemObject
    );
    this.setState({
      sellNotificationOpen: true,
      selectedItemObject: object,
      action: "Sell",
      notificationHeading,
      notificationDescription,
    });
  };

  handleRemoveButton = (object) => {
    const notificationHeading =
      this.state.action + " " + this.state.selectedItemObject.name;
    const notificationDescription = this.generateDescription(
      this.state.selectedItemObject
    );
    this.setState({
      sellNotificationOpen: true,
      selectedItemObject: object,
      action: "Remove",
      notificationHeading,
      notificationDescription,
    });
  };

  handleAddItemButton = () => {
    const notificationHeading = "Add an item";
    const notificationDescription = <AddItem />;
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
            marginLeft: 5,
            marginRight: 5,
            marginTop: "10px",
            marginBottom: "10px",
          }}
          variant="primary"
          size="sm"
          onClick={this.handleAddItemButton}
        >
          Add Item
        </Button>
        <AllItemsTableBody
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

export default AllItems;
