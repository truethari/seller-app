import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import TableHead from "../common/tableHead";
import { GetSoldStatus } from "../../services/fakeProducts";

const ProductsTableBody = (props) => {
  const { columns, items, onSellClick, onRemoveClick } = props;
  return (
    <div className="table-container">
      <Table striped bordered hover>
        <TableHead columns={columns} />
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.productCode}</td>
              <td>
                {GetSoldStatus(item.id) ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ marginLeft: 5, marginRight: 5 }}
                  />
                ) : (
                  ""
                )}
                {item.name}
              </td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <center>
                  <Button
                    style={{ width: "15%", marginRight: 5 }}
                    variant="warning"
                    size="sm"
                    onClick={() => onSellClick(item)}
                    disabled={GetSoldStatus(item.id)}
                  >
                    {GetSoldStatus(item.id) ? "Sold" : "Sell"}
                  </Button>
                  <Link to={"/products/" + item.id}>
                    <Button
                      style={{ width: "15%", marginRight: 5 }}
                      variant="primary"
                      size="sm"
                    >
                      Info
                    </Button>
                  </Link>
                  <Button
                    style={{ width: "25%", marginRight: 5 }}
                    variant="danger"
                    size="sm"
                    onClick={() => onRemoveClick(item)}
                  >
                    Remove
                  </Button>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsTableBody;
