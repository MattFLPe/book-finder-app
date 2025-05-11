import express from "express";
import consign from "consign";

const PORT = 3000;
const app = express();

consign()
.include()
.then()
.into()

const form = document.getElementById("#form-search") 
form.addEventListener('submit', (event) => {
    event.preventDefault()
});



app.post("/", (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});