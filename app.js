import express from "express";
import path from "path";

import {fromIni} from "@aws-sdk/credential-providers";

import S3Client from "@aws-sdk/client-s3";

import routes from "./routes.js";

var app = express();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicStyle = express.static(path.join(__dirname, '/public/'));
const publicImages = express.static(path.join(__dirname, '/images/'));
const publicText = express.static(path.join(__dirname, '/text/'));
app.use('/public', publicStyle);
app.use('/images', publicImages);
app.use('/text', publicText);

app.set("port", process.env.PORT || process.env.port || 3000);
app.use(express.static('./public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//global.s3 = new AWS.S3();

app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Server Started on Port: " + app.get("port"));
});

//export default app;