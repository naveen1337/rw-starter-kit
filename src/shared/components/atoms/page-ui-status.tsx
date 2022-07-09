import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  error: boolean;
}

export default function PageUIStatus(props: PropTypes) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (props.error) {
    return (
      <div className="p-3">
        <p>Page error</p>
      </div>
    );
  }

  return (
    <div className="p-3">
      <p>Loading ...</p>
    </div>
  );
}
