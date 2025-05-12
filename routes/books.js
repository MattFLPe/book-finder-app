module.exports = app.post("/api/search", (req, res) => {
    const { title, author } = req.body;
    console.log('Form data received:', title, author);
    res.send(`Received: ${title} by ${author})`);
    fetch("https://openlibrary.org/search.json")
})

module.exports = app.get("/search", (req, res) => {
    res.send()
})