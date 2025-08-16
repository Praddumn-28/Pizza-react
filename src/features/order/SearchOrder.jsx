import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
        className="transition:all w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm duration-300 placeholder:text-stone-400 focus:outline-none focus:ring
        focus:ring-yellow-500  sm:w-64  sm:focus:w-72"
      />
    </form>
  );
}
