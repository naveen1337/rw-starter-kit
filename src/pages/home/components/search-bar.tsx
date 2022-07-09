import { IoSearch } from "react-icons/io5";

interface PropTypes {
  keyword: any;
  setKeyword(e: any): void;
}

export default function SearchBar(props: PropTypes) {
  return (
    <div className="bg-white p-2 shadow rounded w-full flex items-center justify-between">
      <input
        className="p-0.5 flex-grow outline-none text-xs font-med text-gray-800"
        type="text"
        placeholder="Search song here ..."
      />
      <button className="outline-none">
        <IoSearch size={20} />
      </button>
    </div>
  );
}
