const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],

    getLength: function() {
        return this.chain.length;
    },
    addLink: function(value) {
        this.chain.push(value);
        return this;
    },
    removeLink: function(n) {
        if (typeof n === 'number' && Number.isInteger(n) && (0 < n < this.chain.length)) {
            this.chain.splice(n - 1, 1);
            return this;
        } else { this.chain = []; throw new Error; }


    },
    reverseChain: function() {
        this.chain.reverse();
        return this;
    },
    finishChain: function() {
        res = this.chain.map(e => `( ${e} )`).join('~~');
        this.chain = [];
        return res;
    }
};

module.exports = chainMaker;