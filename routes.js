import express from "express";

var router = express.Router();

import format from "./public/format.js";
import index from "./public/index.js";    
import info from "./public/info.js";
import prep from "./public/prep.js";

router.get("/", async function(req, res, next) {
    console.log("Start Page Routed for user - " + req.socket.remoteAddress);
    var data_format = await format();
    var data_index = await index();
    var data = { 
    	...data_index, 
    	...data_format , 
    	escape: function(html) {
    		return String(html);
  		}
	};
    res.render("index", data);
});

router.get("/info", async function(req, res, next) {
    console.log("Info Page Routed for user - " + req.socket.remoteAddress);
    var data_format = await format();
    var data_info = await info();
    var data = { 
    	...data_info, 
    	...data_format , 
    	escape: function(html) {
    		return String(html);
  		}
	};
    res.render("info", data);
});

router.get("/prep", async function(req, res, next) {
    console.log("Prep Page Routed for user - " + req.socket.remoteAddress);
    var data_format = await format();
    var data_prep = await prep();
    var data = { 
    	...data_prep, 
    	...data_format , 
    	escape: function(html) {
    		return String(html);
  		}
	};
    res.render("prep", data);
});

router.get("/form", async function(req, res, next) {
    console.log("Form Page Routed for user - " + req.socket.remoteAddress);
    var data_format = await format();
    var data = { 
    	...data_format, 
    	escape: function(html) {
    		return String(html);
  		}
	};
    res.render("form", data);
});

export default router;