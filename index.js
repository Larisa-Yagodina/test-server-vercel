const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Express on Vercel - test 2");
});

app.listen(5002, () => {
    console.log("Running on port 5002.");
});

// Export the Express API
module.exports = app;