import { useState } from 'react';

function SearchForm() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://openlibrary.org/search.json?q=${search}`)
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
            {results.map((book, id) => {
            <li key={id}>{book.title || "No title"}</li>
            const url = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            if(book.cover_i) {
              return <img src={url} alt="Book cover"></img>
              } else {
              return <li key={id}>{book.title || "No title"}</li>
              }
            })}
          </ul>
        </div>
      </form>
    )
  }

  export { SearchForm }