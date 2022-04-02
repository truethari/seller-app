import React from "react";
import { Table } from "react-bootstrap";
import TableHead from "../common/tableHead";
import { capitalizeFirstLetter } from "./../utils/strings";

const ItemDescriptionTable = (props) => {
  const { columns, items } = props;
  return (
    <div className="table-container">
      <Table striped bordered hover>
        <TableHead columns={columns} />
        <tbody>
          {Object.keys(items).map(function (key) {
            return (
              <tr>
                <td>{capitalizeFirstLetter(key)}</td>
                <td>{capitalizeFirstLetter(items[key])}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ItemDescriptionTable;
