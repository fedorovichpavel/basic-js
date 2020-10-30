"use strict";

var CustomError = require("../extensions/custom-error");

var chainMaker = {
  chain: [],
  getLength: function getLength() {
    return this.chain.length;
  },
  addLink: function addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink: function removeLink(n) {
    if (typeof n === 'number' && Number.isInteger(n) && 0 < n < this.chain.length) {
      this.chain.splice(n - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error();
    }
  },
  reverseChain: function reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain: function finishChain() {
    res = this.chain.map(function (e) {
      return "( ".concat(e, " )");
    }).join('~~');
    this.chain = [];
    return res;
  }
};
module.exports = chainMaker;