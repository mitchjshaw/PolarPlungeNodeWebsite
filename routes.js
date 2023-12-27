import express from "express";

var router = express.Router();

import format from "./public/format.js";
import index from "./public/index.js";    
//import info from "./public/info.js";
//import prep from "./public/prep.js";

router.get("/", async function(req, res, next) {
    console.log("Start Page Routed");
    var data_format = await format();
    var data_index = await index();
    var data = { 
    	...data_index, 
    	...data_format , 
    	escape: function(html) {
    		return String(html);
  		}
	};
    //console.log("DATA_FORMAT: " + JSON.stringify(data_format));
    //console.log("DATA_INDEX: " + JSON.stringify(data_index));
    console.log("DATA: " + JSON.stringify(data));
    res.render("index", data);
});

export default router;