import React, { Component } from "react";
import { getAllItems } from "../services/fakeItems";
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
  };

  setModalShow = () => {
    this.setState({ sellNotificationOpen: false });
  };

  handleSellButton = (object) => {
    this.setState({
      sellNotificationOpen: true,
      selectedItemObject: object,
      action: "Sell",
    });
  };

  handleRemoveButton = (object) => {
    this.setState({
      sellNotificationOpen: true,
      selectedItemObject: object,
      action: "Remove",
    });
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

  render() {
    const { columns, items, action, selectedItemObject, sellNotificationOpen } =
      this.state;
    return (
      <React.Fragment>
        <AllItemsTableBody
          columns={columns}
          items={items}
          onSellClick={this.handleSellButton}
          onRemoveClick={this.handleRemoveButton}
        />
        <Notification
          show={sellNotificationOpen}
          onHide={this.setModalShow}
          heading={action + " " + selectedItemObject.name}
          description={this.generateDescription(selectedItemObject)}
        />
      </React.Fragment>
    );
  }
}

export default AllItems;
