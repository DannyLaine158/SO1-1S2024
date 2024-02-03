const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ msg: "Hola a todos" })
});

app.listen(port, () => {
    console.log("Port ", port);
});