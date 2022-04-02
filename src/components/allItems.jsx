import React, { Component } from "react";
import { getAllItems } from "../services/fakeItems";
import Notification from "./common/notification";
import AllItemsTableBody from "./tables/allItemsTable";

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
  };

  setModalShow = () => {
    const sellNotificationOpen = false;
    this.setState({ sellNotificationOpen });
  };

  handleSellButton = (object) => {
    const sellNotificationOpen = true;
    const selectedItemObject = object;
    const action = "sell";
    this.setState({ sellNotificationOpen, selectedItemObject, action });
  };

  handleInfoButton = (object) => {
    const sellNotificationOpen = true;
    const selectedItemObject = object;
    const action = "info";
    this.setState({ sellNotificationOpen, selectedItemObject, action });
  };

  handleRemoveButton = (object) => {
    const sellNotificationOpen = true;
    const selectedItemObject = object;
    const action = "delete";
    this.setState({ sellNotificationOpen, selectedItemObject, action });
  };

  render() {
    const { columns, items, action } = this.state;
    return (
      <React.Fragment>
        <AllItemsTableBody
          columns={columns}
          items={items}
          onSellClick={this.handleSellButton}
          onInfoClick={this.handleInfoButton}
          onRemoveClick={this.handleRemoveButton}
        />
        <Notification
          show={this.state.sellNotificationOpen}
          onHide={this.setModalShow}
          actionInfo={action}
        />
      </React.Fragment>
    );
  }
}

export default AllItems;
