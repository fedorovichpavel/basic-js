"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var result = '';

  if (Array.isArray(members)) {
    members.forEach(function (e) {
      if (typeof e === 'string') {
        result += e.replace(/ /g, '')[0];
      }
    });

    if (result === '') {
      return false;
    }

    return result.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
};