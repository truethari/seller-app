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
            {this.state.items.map((e, index) => (
              <tr key={e.id}>
                <td>{index + 1}</td>
                <td>{e.id}</td>
                <td>{e.itemCode}</td>
                <td>{e.brandName + " - " + e.productName}</td>
                <td>{e.price}</td>
                <td>{e.description}</td>
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
