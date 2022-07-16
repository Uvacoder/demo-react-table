import React from "react";

function TBody(props) {
  return (
    <tbody>
      {props.data.map((item) => (
        <tr key={item.id + item.phone}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
