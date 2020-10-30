"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  var count = 0;
  var str = cats.flat();
  str.forEach(function (e) {
    if (e === '^^') {
      count++;
    }
  });
  return count;
};