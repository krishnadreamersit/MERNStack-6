const express = require("express");
const PORT = process.env.PORT || 8000;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get("/api/hello", (req, res) => {
    res.status(200).send("Hello World!");
});
server.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}`));