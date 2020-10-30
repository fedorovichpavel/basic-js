"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomError = require("../extensions/custom-error");

module.exports =
/*#__PURE__*/
function () {
  function DepthCalculator() {
    _classCallCheck(this, DepthCalculator);

    this.count = 1;
    this.deep = 1;
  }

  _createClass(DepthCalculator, [{
    key: "calculateDepth",
    value: function calculateDepth(arr) {
      var count = 1;
      var deep = 0;

      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          count = this.calculateDepth(arr[i]);
          deep = Math.max(deep, count);
        }
      }

      deep++;
      return deep;
    }
  }]);

  return DepthCalculator;
}();