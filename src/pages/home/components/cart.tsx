import { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { getSnapshot, productTableSub } from "../../../state/tables";
import React from "react";

interface PropTypes {
  text: string;
}

function Cart(props: PropTypes) {

  return (
    <div className="">
      <div>
        <h4 className="">Cart: {props.text}</h4>
      </div>
    </div>
  );
}

// export default React.memo(Cart)
export default Cart
