import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {Object.keys(columns).map(function (key) {
          return <th width={columns[key]}>{key.startsWith("_") ? "" : key}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
