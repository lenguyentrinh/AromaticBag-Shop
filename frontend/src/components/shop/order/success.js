import React, { Fragment, useContext, useEffect } from "react";
import { fetchData } from "./Action";
import { cartListProduct } from "../partials/FetchApi";
import { LayoutContext } from "..";

export const PayoutSuccessComponent = (props) => {
  const { data, dispatch } = useContext(LayoutContext);

  useEffect(() => {
    fetchData(cartListProduct, dispatch).then(cartListProduct => {
      createOrder(data);
    });
  }, []);

  function createOrder(cartListProduct) {
    // console.log(cartListProduct);

    // ...
    // ...
}
  return (
    <Fragment>
      <div className="text-2xl text-center">Payment Success</div>
      <div
        onClick={() => props.history.push("/")}
        className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
        style={{ background: "#303031" }}
      >
        Continue Shopping
      </div>
    </Fragment>
  );
};
