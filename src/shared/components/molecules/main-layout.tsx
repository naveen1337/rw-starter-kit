import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  children: React.ReactNode;
}

export default function MainLayout(props: PropTypes) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return <div>{props.children}</div>;
}
