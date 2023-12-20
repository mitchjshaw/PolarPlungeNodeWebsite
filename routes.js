import express from "express";

var router = express.Router();

import format from "./public/format.js";
//import index from "./public/index.js";    
//import info from "./public/info.js";
//import prep from "./public/prep.js";

router.get("/", function(req, res, next) {
    console.log("Start Page Routed");
    res.render("index");
    format();
    //index();
});

export default router;