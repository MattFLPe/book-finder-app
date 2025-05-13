const express = require("express");
//import consign from "consign";

const PORT = 3000;
const app = express();

/*
consign()
.include()
.then()
.into()
*/

app.get("/api/search", (req, res) => {
    const searchTerm = req.query.q;

    fetch(`https://openlibrary.org/search.json?q=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      res.json(data)
    })
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});