import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  data?: any;
}

export default function BluePrint(props: PropTypes) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <p>hello World</p>
    </div>
  );
}
