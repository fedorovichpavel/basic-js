"use strict";

var CustomError = require("../extensions/custom-error");

var MODERN_ACTIVITY = 15;
var HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  var numActivity = +sampleActivity;
  var k = 0.693 / HALF_LIFE_PERIOD;
  var t = Math.log2(MODERN_ACTIVITY / numActivity) / k;

  if (t < 1 || t == Infinity || isNaN(t)) {
    return false;
  }

  return t;
};