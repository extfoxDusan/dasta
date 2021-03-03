const http = require('http');
const express = require("express");
const path = require("path");

const getTranslatedServer = (lang) => {
    const distFolder = path.join(process.cwd(), `dist/DRMWebPage/server/${lang}`);
    const server = require(`${distFolder}/main.js`);
    return server.app(lang);
};

function run() {
    const port = process.env.PORT || 4200;
  
    // Start up the Node server
    const appKa = getTranslatedServer("ka");
    const appEn = getTranslatedServer("en");
  
    const server = express();
    server.use("/ka", appKa);
    server.use("/en", appEn);
    server.use("", appEn);
  
    server.listen(port, () => {});
}
  
run();


