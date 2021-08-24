const express = require("express");
require("dotenv").config();

const generateMarvelBS = require("./utils/generateMarvelBS");
const Request = require("./utils/request");

const router = express.Router();

router.get("/characters", (req, res) => {
    const baseUrl = process.env.MARVEL_API + "/characters";

    Request.get(baseUrl, {
        ...req.query,
        ...generateMarvelBS(),
    }).then((marvelResponse) => {
        res.send(marvelResponse.data.results);
    });
});

module.exports = router;
