import React from "react";
import THead from "./THead";
import TBody from "./TBody";

function Table(props: any) {
    console.log(props);
  return (
    <table className="table">
      <THead
        onSort={props.onSort}
        sort={props.sort}
        sortField={props.sortField}
      />
      <TBody data={props.data} />
    </table>
  );
}

export default Table;
