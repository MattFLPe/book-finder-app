import { useState } from 'react';


function SearchForm() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`/api/search?q=${search}`)
      .then((response) => response.json())
      .then(data => {
        //results.map((result) => <li>{result.title}</li>) 
        setResults(data);
      });
      };
    return (
      <form onSubmit={handleSubmit}>
        <label>Search:
          <input
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </form>
    )
  }

  export { SearchForm }