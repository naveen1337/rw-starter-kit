import { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { getSnapshot, productTableSub } from "../../../state/tables";

interface PropTypes {
  text: string;
}

export default function Title(props: PropTypes) {
  const productVersion = useSyncExternalStore(productTableSub, getSnapshot);

  return (
    <div className="">
      <div>
        <h4 className="">{props.text}</h4>
      </div>
    </div>
  );
}
