import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllItems } from "../services/fakeItems";
import Notification from "./common/notification";

class AllItems extends Component {
  state = {
    items: getAllItems(),
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
    return (
      <React.Fragment>
        <div className="table-container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th width="3%">#</th>
                <th width="5%">ID</th>
                <th width="7%">Item Code</th>
                <th width="30%">Name</th>
                <th width="10%">Price</th>
                <th width="15%">Description</th>
                <th width="20%"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.itemCode}</td>
                  <td>{item.brandName + " - " + item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button
                      style={{ marginLeft: 5, marginRight: 5 }}
                      variant="warning"
                      size="sm"
                      onClick={() => this.handleSellButton(item)}
                    >
                      Sell
                    </Button>
                    <Button
                      style={{ marginLeft: 0, marginRight: 5 }}
                      variant="primary"
                      size="sm"
                      onClick={() => this.handleInfoButton(item)}
                    >
                      Info
                    </Button>
                    <Button
                      style={{ marginLeft: 0, marginRight: 5 }}
                      variant="danger"
                      size="sm"
                      onClick={() => this.handleRemoveButton(item)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Notification
          show={this.state.sellNotificationOpen}
          onHide={this.setModalShow}
          actionInfo={this.state.action}
        />
      </React.Fragment>
    );
  }
}

export default AllItems;
