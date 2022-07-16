// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from "react";
// @ts-expect-error TS(6142): Module './THead' was resolved to '/home/mdlufy/Doc... Remove this comment to see the full error message
import THead from "./THead";
// @ts-expect-error TS(6142): Module './TBody' was resolved to '/home/mdlufy/Doc... Remove this comment to see the full error message
import TBody from "./TBody";

function Table(props: any) {
  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <table className="table">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <THead
        onSort={props.onSort}
        sort={props.sort}
        sortField={props.sortField}
      />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TBody data={props.data} />
    {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </table>
  );
}

export default Table;
