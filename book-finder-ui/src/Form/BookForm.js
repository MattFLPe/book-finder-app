import { useState } from 'react';


function SearchForm() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`/api/search?q=${search}`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setResults(results.docs);
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
        <div>
          <ul>
            {results.map((book, key) => {
              return <li key={key}>{book.title || "No title"}</li>
            })}
          </ul>
        </div>
      </form>
    )
  }

  export { SearchForm }