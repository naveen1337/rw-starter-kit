import clsx from "clsx";
import React from "react";

interface PropTypes {
  primary?: boolean;
  text: string;
  icon?: React.ReactElement;
  loading?: boolean;
  onClick(): void;
}

export default function AppBtn(props: PropTypes) {
  const btn = `w-full py-5 tracking-wider font-bold text-base 
  bg-black flex items-center justify-center text-xs text-center text-wider
     font-med rounded text-white text-center cursor-pointer transition ease-in`;
  const btnSs = clsx(btn);

  return (
    <button onClick={props.onClick} className={btnSs}>
      {props.text}
      {props.icon && props.icon}
    </button>
  );
}
