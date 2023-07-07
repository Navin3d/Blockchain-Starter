const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { PORT } = require("./config/index");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    return res.status(200).json({
        status: "OK",
        message: "Server is Up! and running..."
    });
});

app.listen(PORT, () => { console.log(`Listening and running in PORT ${ PORT }...`) });
