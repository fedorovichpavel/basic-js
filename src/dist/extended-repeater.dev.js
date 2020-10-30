"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === null) {
    str = 'null';
  }

  var newstr = [];
  newstr.push(str);

  if (options.addition === null) {
    options.addition = 'null';
  }

  var opt = {
    repeatTimes: options.repeatTimes ? options.repeatTimes : 1,
    separator: options.separator ? options.separator : '+',
    addition: options.addition !== undefined ? options.addition.toString() : '',
    additionRepeatTimes: options.additionRepeatTimes ? options.additionRepeatTimes : 1,
    additionSeparator: options.additionSeparator ? options.additionSeparator : '|'
  };
  var repeatTimes = opt.repeatTimes,
      separator = opt.separator,
      addition = opt.addition,
      additionRepeatTimes = opt.additionRepeatTimes,
      additionSeparator = opt.additionSeparator;
  var add = [];

  if (additionRepeatTimes > 1) {
    for (var i = 1; i <= additionRepeatTimes; i++) {
      add.push(addition);

      if (i !== additionRepeatTimes) {
        add.push(additionSeparator);
      }
    }
  } else {
    add.push(addition);
  }

  newstr = newstr.concat(add).join('');
  var res = [];
  res.push(newstr);
  res = res[0];
  var result = [];

  if (repeatTimes > 1) {
    for (var _i = 1; _i <= repeatTimes; _i++) {
      result.push(res);

      if (_i !== repeatTimes) {
        result.push(separator);
      }
    }
  } else {
    result.push(res);
  }

  return result.join('');
};