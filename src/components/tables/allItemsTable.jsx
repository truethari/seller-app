import React from "react";
import { Table, Button } from "react-bootstrap";
import TableHead from "../common/tableHead";

const AllItemsTableBody = (props) => {
  const { columns, items, onInfoClick, onSellClick, onRemoveClick } = props;
  return (
    <div className="table-container">
      <Table striped bordered hover>
        <TableHead columns={columns} />
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.itemCode}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <Button
                  style={{ marginLeft: 5, marginRight: 5 }}
                  variant="warning"
                  size="sm"
                  onClick={() => onSellClick(item)}
                >
                  Sell
                </Button>
                <Button
                  style={{ marginLeft: 0, marginRight: 5 }}
                  variant="primary"
                  size="sm"
                  onClick={() => onInfoClick(item)}
                >
                  Info
                </Button>
                <Button
                  style={{ marginLeft: 0, marginRight: 5 }}
                  variant="danger"
                  size="sm"
                  onClick={() => onRemoveClick(item)}
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
};

export default AllItemsTableBody;
