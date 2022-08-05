import { Link } from "react-router-dom";

interface PropTypes {
  count: number;
}

export default function Title(props: PropTypes) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <h4 className="font-bold">Most Popular Songs</h4>
        <p className="font-bold text-gray-600">{props.count} Songs</p>
      </div>

      <Link
        to="/app/populars"
        className="bg-black px-3 py-2 rounded text-white text-xs uppercase"
      >
        view more
      </Link>
    </div>
  );
}
