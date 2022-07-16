import React from "react";

function TBody(props: any) {
  return (
    <tbody>
      {props.data.map((item: any) => <tr key={item.id + item.phone}>
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>)}
    </tbody>
  );
}

export default TBody;
