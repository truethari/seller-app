import React, { Component } from "react";
import { getAllItems } from "../services/fakeItems";
import Notification from "./common/notification";
import AllItemsTableBody from "./tables/allItemsTable";
import { capitalizeFirstLetter } from "./utils/strings";

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
    this.setState({ sellNotificationOpen: false });
  };

  handleSellButton = (object) => {
    this.setState({
      sellNotificationOpen: true,
      selectedItemObject: object,
      action: "sell",
    });
  };

  handleInfoButton = (object) => {
    this.setState({
      sellNotificationOpen: true,
      selectedItemObject: object,
      action: "info",
    });
  };

  handleRemoveButton = (object) => {
    this.setState({
      sellNotificationOpen: true,
      selectedItemObject: object,
      action: "remove",
    });
  };

  generateDescription(object) {
    var itemInfo = Object.keys(object).map(function (key) {
      return (
        <option value={key}>
          {capitalizeFirstLetter(key) +
            " : " +
            capitalizeFirstLetter(object[key])}
        </option>
      );
    });
    return itemInfo;
  }

  render() {
    const { columns, items, action, selectedItemObject } = this.state;
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
          heading={
            capitalizeFirstLetter(action) + " " + selectedItemObject.name
          }
          description={this.generateDescription(selectedItemObject)}
        />
      </React.Fragment>
    );
  }
}

export default AllItems;
