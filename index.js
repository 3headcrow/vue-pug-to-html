"use strict";

const path = require("path");
const glob = require("glob");
const convertFile = require('./bin/index.js')

const getAllFiles = (src, callback) => {
  glob(src + "/**/*", callback);
};

const inputDir = 'finector.exchange-front'
getAllFiles(path.join("..", inputDir), (err, res) => {
  if (err) {
    console.log("Error", err);
  } else {
    const filePathesToFix = res.filter((file) => file.endsWith('.vue'));
    filePathesToFix.forEach((file)=> convertFile(file))
  }
});
