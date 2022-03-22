import { useState } from "react";

const list = ["banana", "apple", "orange", "mango", "pineapple", "watermelon"];
export const SearchBar = () => {
  const [results, setResults] = useState(list);

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setResults(list);
      return;
    }

    const searchReturn = list.filter(
      (fruit) => fruit.indexOf(e.target.value) !== -1
    );
    setResults(searchReturn);
  };

  return (
    <>
      Search: <input onChange={handleSearch} placeholder="Enter here..." />
      {results && results.map((fruit, index) => <ul key={index}>{fruit}</ul>)}
    </>
  );
};
