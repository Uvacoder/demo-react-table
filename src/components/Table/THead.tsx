import React from "react";

function Thead(props: any) {
  return (
    <thead>
      <tr>
        <th onClick={props.onSort.bind(null, "id")}>
          ID {props.sortField === "id" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "firstName")}>
          First Name{" "}
          {props.sortField === "firstName" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "lastName")}>
          Last Name{" "}
          {props.sortField === "lastName" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "email")}>
          E-mail{" "}
          {props.sortField === "email" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "phone")}>
          Phone{" "}
          {props.sortField === "phone" ? <small>{props.sort}</small> : null}
        </th>
      </tr>
    </thead>
  );
}

export default Thead;
