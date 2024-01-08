import React, { useEffect, useRef, useState } from "react";

const Debouncing = () => {
  const [search, setSearch] = useState("");

  const timeout = useRef(null);
  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      console.log("Hi There");
    }, 2000);
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onInput={(e) => setSearch(e.target.value)}
      />
      ;
    </div>
  );
};

export default Debouncing;
