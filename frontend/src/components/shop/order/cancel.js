import React, { Fragment } from "react";

export const CancelComponent = (props) => {
  return (
    <Fragment>
      <div className="text-2xl text-center">Payment Cancelled</div>
      <div
        onClick={() => props.history.push("/")}
        className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
        style={{ background: "#303031" }}
      >
        Back to Home
      </div>
    </Fragment>
  );
};
