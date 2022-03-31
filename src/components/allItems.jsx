import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllItems } from "../services/fakeItems";

class AllItems extends Component {
  state = {
    items: getAllItems(),
  };
  render() {
    return (
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Code</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.itemCode}</td>
                <td>{e.brandName + " - " + e.productName}</td>
                <td></td>
                <td>
                  <Button
                    style={{ marginLeft: 5, marginRight: 5 }}
                    variant="warning"
                    size="sm"
                  >
                    Sell
                  </Button>
                  <Button
                    style={{ marginLeft: 0, marginRight: 5 }}
                    variant="primary"
                    size="sm"
                  >
                    Info
                  </Button>
                  <Button
                    style={{ marginLeft: 0, marginRight: 5 }}
                    variant="danger"
                    size="sm"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AllItems;
