import dotenv from "dotenv";
import express from "express";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/about", (req, res) => {
    res.send("about");
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
